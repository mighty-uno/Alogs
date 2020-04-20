// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

let resultMemo = {};
function memoized(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
fib = memoized(fib);

/***
 * SOl 1
 *  let values = [0, 1];
  for (let index = 1; index < n; index++) {
    const newElement = values[index - 1] + values[index];
    values.push(newElement);
  }
  console.log(values);
  return values[values.length - 1];

  SOL 2
  
  function fib(n, index = 1, values = [0, 1]) {
  if (index < n) {
    values.push(values[index - 1] + values[index]);
    index++;
    fib(n, index, values);
  }

  return values[values.length - 1];
}
 */

module.exports = fib;
