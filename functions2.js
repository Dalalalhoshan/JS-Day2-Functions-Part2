//task 1
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

function isOdd(n) {
  if (n % 2 == 0) {
    return "false";
  } else return "true";
}
let result = isOdd(3);
console.log(result);

//task 2
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  if (n >= 1) {
    const num = n - 1;
    return num / 2;
  }
}
console.log(oddsSmallerThan(15));

// task 3
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

function squareOrDouble(n) {
  if (n % 2 == 0) {
    return n * 2;
  } else return n ** 2;
}
let result2 = squareOrDouble(9);
console.log(result2);
