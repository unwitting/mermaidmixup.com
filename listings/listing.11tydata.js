const { activeListings } = require("../src/utils/etsy");

activeListings.init();

module.exports = async () => {
  const listings = await activeListings.get();
  return { listings };
};
