const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || null;

module.exports = {
  google: {
    enabled: GA_MEASUREMENT_ID !== null,
    measurementID: GA_MEASUREMENT_ID,
  },
};

console.log(`Google Analytics enabled: ${module.exports.google.enabled}`);
