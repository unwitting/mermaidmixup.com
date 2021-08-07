import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const { ETSY_API_KEY, ETSY_SHOP_ID, ETSY_USE_DEMO_DATA } = process.env;

let activeListingsCache = null;

export const getActiveListings = async () => {
  if (activeListingsCache) {
    return activeListingsCache;
  }

  if (ETSY_USE_DEMO_DATA === "1") {
    return JSON.parse(fs.readFileSync("src/data/etsy_listings_demo_data.json"));
  }

  const resp = await fetch(
    `https://openapi.etsy.com/v3/application/shops/${ETSY_SHOP_ID}/listings/active?client_id=${ETSY_API_KEY}`
  );
  const { results: listings } = await resp.json();

  for (const listing of listings) {
    console.log(`Getting images for listing ${listing.listing_id}`);
    const imageResp = await fetch(
      `https://openapi.etsy.com/v3/application/shops/${ETSY_SHOP_ID}/listings/${listing.listing_id}/images?client_id=${ETSY_API_KEY}`
    );
    const { count, results: images } = await imageResp.json();
    console.log(`Got ${count} images`);
    listing.images = images;
  }

  activeListingsCache = listings;
  return listings;
};
