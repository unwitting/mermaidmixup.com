const ENVIRONMENT = process.env.MERMAID_MIXUP_ENVIRONMENT || "development";

module.exports = () => ({
  environment: ENVIRONMENT,
  isProduction: ENVIRONMENT === "production",
  isProductionPreview: ENVIRONMENT === "production-preview",
  isProductionLike:
    ENVIRONMENT === "production" || ENVIRONMENT === "production-preview",
  isDevelopment: ENVIRONMENT === "development",
});
