const eleventySass = require("eleventy-sass");
const markdownIt = require("markdown-it");
const markdownItPlainText = require("markdown-it-plain-text");

const { baseURL } = require("./_data/site")();

const md = new markdownIt({
  html: true,
});
md.use(markdownItPlainText);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });
  eleventyConfig.addFilter("markdownToPlainText", (content) => {
    md.render(content);
    return md.plainText;
  });
  eleventyConfig.addFilter("prefixURLIfNotAbsolute", (urlOrPath) => {
    if (urlOrPath.startsWith("http")) {
      return urlOrPath;
    }
    return `${baseURL}${urlOrPath}`;
  });
};
