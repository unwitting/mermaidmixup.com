const ENVIRONMENT =
  process.env.MERMAID_MIXUP_ENVIRONMENT === "production"
    ? "production"
    : "development";

module.exports = () => ({
  environment: ENVIRONMENT,
  isProduction: ENVIRONMENT === "production",
  isDevelopment: ENVIRONMENT === "development",
});
