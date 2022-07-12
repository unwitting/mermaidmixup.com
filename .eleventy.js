const eleventySass = require("eleventy-sass");
const markdownIt = require("markdown-it");

const md = new markdownIt({
  html: true,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });
};
