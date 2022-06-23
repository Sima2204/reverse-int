module.exports = function reverse (n) {
  let revNum = n.toSrting().split("").reverse().join("");
  let result = parseInt(revNum);
  return result;
};