/** return max sum of sub array */
/** Using Kadane algo */

function Kadane() {
  const values = [1, 2, 3, 4, 5, -20, -10];
  let maxSum = values[0];
  let currSum = 0;

  for (const value of values) {
    currSum = Math.max(currSum, 0);

    currSum += value;

    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}
