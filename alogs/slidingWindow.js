/** return index of  max sum of sub array */
/** Using Sliding window */

function slidingWindow() {
  const values = [1, 2, 3, 4, 5, -20, -10];
  let maxSum = values[0];
  let currSum = 0;
  let left = 0;
  let maxL = 0,
    maxR = 0;

  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    debugger;

    if (currSum < 0) {
      currSum = 0;
      left = i;
    }
    currSum += value;
    if (currSum > maxSum) {
      maxSum = currSum;
      maxL = left;
      maxR = i;
    }
  }

  return [maxL, maxR];
}
