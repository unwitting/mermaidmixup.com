const currentYear = () => {
  const today = new Date();
  return today.getFullYear();
};

module.exports = () => ({
  year: currentYear(),
});
