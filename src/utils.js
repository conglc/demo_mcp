// Utility functions

/**
 * Format a date to Vietnamese locale
 * @param {Date} date
 * @returns {string}
 */
const formatDate = (date) => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
};

/**
 * Capitalize first letter of a string
 * @param {string} str
 * @returns {string}
 */
const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = { formatDate, capitalize };
