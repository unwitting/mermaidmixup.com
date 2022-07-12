const { getActiveListings } = require("../src/utils/etsy");

module.exports = async () => {
  const listings = await getActiveListings();
  return {
    listings,
    eleventyComputed: {
      title: ({ listing }) => listing.title,
      description: ({ listing }) => listing.description,
      socialImage: ({ listing }) => listing.images[0].url_570xN,
    },
  };
};
