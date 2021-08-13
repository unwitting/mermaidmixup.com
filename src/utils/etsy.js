import dotenv from "dotenv";
import fs from "fs";
import wait from "wait";

dotenv.config();

const { ETSY_API_KEY, ETSY_SHOP_ID } = process.env;

const getActiveListings = async () => {
  activeListings.running = true;

  console.log("Getting active Etsy listings from API...");

  if (activeListings.cache) {
    return activeListings.cache;
  }

  const resp = await fetch(
    `https://openapi.etsy.com/v3/application/shops/${ETSY_SHOP_ID}/listings/active?client_id=${ETSY_API_KEY}`
  );
  const { results: listings } = await resp.json();

  for (const listing of listings) {
    // console.log(`Getting images for listing ${listing.listing_id}`);
    await wait(400);
    const imageResp = await fetch(
      `https://openapi.etsy.com/v3/application/shops/${ETSY_SHOP_ID}/listings/${listing.listing_id}/images?client_id=${ETSY_API_KEY}`
    );
    const { count, results: images } = await imageResp.json();
    console.log(
      `Got ${count} images for listing ${listing.listing_id} (${listing.title})`
    );
    listing.images = images;
  }

  console.log("Finished getting active Etsy listings");

  activeListings.cache = listings;
  activeListings.running = false;

  return listings;
};

export const activeListings = {
  cache: null,
  running: false,
  init() {
    if (!this.running && !this.cache) {
      // console.log("First init(): calling getActiveListings()");
      getActiveListings();
    } else {
      // console.log(
      //   "Subsequent init(): getActiveListings() already run / running"
      // );
    }
  },
  async get() {
    while (this.running) {
      await wait(1000);
    }
    return this.cache;
  },
};
