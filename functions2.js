//task 1
function isOdd(n) {
  if (n % 2 == 0) {
    return "false";
  } else return "true";
}
let result = isOdd(3);
console.log(result);

//task 2
//function oddsSmallerThan(n){}

// task 3
function squareOrDouble(n) {
  if (n % 2 == 0) {
    return n * 2;
  } else return n ** 2;
}
let result2 = squareOrDouble(9);
console.log(result2);
