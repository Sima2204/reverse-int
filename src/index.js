module.exports = function reverse (n) {
  let num = Math.abs(n);  
  let str = num.toString();
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
  }
  return result;
};