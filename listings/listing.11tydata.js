module.exports = async () => ({
  eleventyComputed: {
    title: ({ listing }) => listing.title,
    description: ({ listing }) => listing.description,
    socialImage: ({ listing }) => listing.images[0].url_570xN,
  },
});
