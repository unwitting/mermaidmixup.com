const { isProduction } = require("./environment");

const protocol = isProduction ? "https" : "http";
const domain = isProduction ? "mermaidmixup.com" : "localhost:8080";
const baseURL = `${protocol}://${domain}`;

module.exports = () => ({
  protocol,
  domain,
  baseURL,
});
