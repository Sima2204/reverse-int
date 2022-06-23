module.exports = function reverse (n) {
  let revNum = n.toSrting().split("").reverse().join("");
  n = parseInt(revNum);
  return revNum;
};