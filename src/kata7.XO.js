const xo = (str) => {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
};
module.exports = xo