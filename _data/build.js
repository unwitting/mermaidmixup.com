const NOW = new Date();

const currentYear = () => {
  return NOW.getFullYear();
};

module.exports = () => ({
  year: currentYear(),
  datetime: {
    rfc822: NOW.toUTCString(),
  },
});
