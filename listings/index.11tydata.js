const { getActiveListings } = require("../src/utils/etsy");

module.exports = async () => {
  const listings = await getActiveListings();
  return { listings };
};
