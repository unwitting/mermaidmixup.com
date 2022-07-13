const { getActiveListings } = require("../src/utils/etsy");

module.exports = async () => ({
  listings: await getActiveListings(),
});
