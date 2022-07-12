const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addCollection("sitemapPages", function (collectionApi) {
    return collectionApi.getAllSorted().filter(function (item) {
      const extension = item.inputPath.split(".").pop();
      return (
        extension === "njk" ||
        (extension === "md" && !item.inputPath.endsWith("README.md"))
      );
    });
  });
};
