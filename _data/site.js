const { isProduction, isDevelopment, isProductionPreview } =
  require("./environment")();

console.log(isDevelopment);

const getProtocol = () => {
  if (isProduction) {
    return "https";
  }
  if (isDevelopment) {
    return "http";
  }
  if (isProductionPreview) {
    const url = new URL(process.env.DEPLOY_URL);
    return url.protocol.slice(0, -1);
  }
};

const getDomain = () => {
  if (isProduction) {
    return "mermaidmixup.com";
  }
  if (isDevelopment) {
    return "localhost:8080";
  }
  if (isProductionPreview) {
    const url = new URL(process.env.DEPLOY_URL);
    return url.hostname;
  }
};

const getBaseURL = () => {
  if (!isProductionPreview) {
    return `${getProtocol()}://${getDomain()}`;
  }
  return process.env.DEPLOY_URL;
};

module.exports = () => ({
  protocol: getProtocol(),
  domain: getDomain(),
  baseURL: getBaseURL(),
});

console.log(module.exports());
