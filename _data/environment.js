const ENVIRONMENT = process.env.MERMAID_MIXUP_ENVIRONMENT || "development";
console.log(`MERMAID_MIXUP_ENVIRONMENT: ${ENVIRONMENT}`);

module.exports = () => ({
  environment: ENVIRONMENT,
  isProduction: ENVIRONMENT === "production",
  isProductionPreview: ENVIRONMENT === "production-preview",
  isProductionLike:
    ENVIRONMENT === "production" || ENVIRONMENT === "production-preview",
  isDevelopment: ENVIRONMENT === "development",
});
