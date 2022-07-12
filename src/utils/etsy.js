const dotenv = require("dotenv");
const wait = require("wait");
const fetch = require("node-fetch");

dotenv.config();

const { ETSY_API_KEY, ETSY_SHOP_ID } = process.env;
const ETSY_API_ENABLED = !!ETSY_API_KEY && !!ETSY_SHOP_ID;

const getActiveListings = async () => {
  if (!ETSY_API_ENABLED) {
    console.log("Live Etsy connection not enabled, returning from dev cache");
    return require("./etsy_cache.json");
  }
  console.log("Getting active Etsy listings from API...");

  const resp = await fetch(
    `https://openapi.etsy.com/v3/application/shops/${ETSY_SHOP_ID}/listings/active?client_id=${ETSY_API_KEY}`
  );
  const { results: listings } = await resp.json();

  for (const listing of listings) {
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

  return listings;
};

module.exports = { getActiveListings };
