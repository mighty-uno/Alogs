/** Prefix sum */
/** Input: arr[] = {10, 20, 10, 5, 15}
Output: prefixSum[] = {10, 30, 40, 45, 60}
 */

const calcPrefixSum = (arr) => {
  const prefixSumArray = [arr[0]];

  if (arr.length == 1) {
    return prefixSumArray;
  }

  for (let i = 1; i < arr.length; i++) {
    prefixSumArray.push(arr[i] + prefixSumArray[i - 1]);
  }

  return prefixSumArray;
};

const arr1 = [10, 20, 10, 5, 15];

console.log(calcPrefixSum(arr1));
