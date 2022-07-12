const eleventySass = require("eleventy-sass");
const markdownIt = require("markdown-it");

const { baseURL } = require("./_data/site")();

const md = new markdownIt({
  html: true,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });
  eleventyConfig.addFilter("prefixURLIfNotAbsolute", (urlOrPath) => {
    if (urlOrPath.startsWith("http")) {
      return urlOrPath;
    }
    return `${baseURL}${urlOrPath}`;
  });
};
