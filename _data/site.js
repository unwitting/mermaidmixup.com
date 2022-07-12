const { isProduction, isDevelopment, isProductionPreview } =
  require("./environment")();

const getProductionPreviewDeployURL = () => process.env.DEPLOY_PRIME_URL;

const getProtocol = () => {
  if (isProduction) {
    return "https";
  }
  if (isDevelopment) {
    return "http";
  }
  if (isProductionPreview) {
    const url = new URL(getProductionPreviewDeployURL());
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
    const url = new URL(getProductionPreviewDeployURL());
    return url.hostname;
  }
};

const getBaseURL = () => {
  if (!isProductionPreview) {
    return `${getProtocol()}://${getDomain()}`;
  }
  return getProductionPreviewDeployURL();
};

module.exports = () => ({
  protocol: getProtocol(),
  domain: getDomain(),
  baseURL: getBaseURL(),
});

console.log(`Site base URL configured as: ${module.exports().baseURL}`);
