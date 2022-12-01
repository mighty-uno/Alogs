const bubbleSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];

        array[j] = array[j + 1];

        array[j + 1] = temp;
      }
    }
  }

  return array;
};

const selectionSort = (array) => {
  for (var i = 0; i < array.length - 1; i++) {
    let min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }

    const temp = array[i];

    array[i] = array[min];

    array[min] = temp;
  }

  return array;
};

const insertionSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
    debugger;
    let j = i;

    while (j > 0) {
      if (array[j - 1] > array[j]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }

      j--;
    }
  }

  return array;
};

const array = [78, 1, 4, 2, 6, 4, 10, 55];
// console.log(bubbleSort(array));
// console.log(selectionSort(array));

// console.log(insertionSort(array));

// const mergeSort = (array) => {
//   let midOfArray = Math.floor(array.length / 2);
//   let leftArray = array.splice(0, midOfArray);

//   return sorting(leftArray, array);
// };

// const sorting = (leftArray, rightArray) => {
//   let i,
//     j = 0;

//   let sortedArray = [];

//   while (i < leftArray.length && j < rightArray.length) {
//     if (leftArray[i] < rightArray[j]) {
//       sortedArray.push(leftArray[i]);
//       i++;
//     }

//     if (rightArray[j] < leftArray[i]) {
//       sortedArray.push(rightArray[j]);
//       j++;
//     }
//   }

//   return sortedArray;
// };

const mergeSort = (array) => {
  if (array.length == 1) {
    return array;
  }
  debugger;
  let midOfArray = Math.floor(array.length / 2);
  let leftArray = array.splice(0, midOfArray);
  debugger;
  return sorting(mergeSort(leftArray), mergeSort(array));
};

const sorting = (leftArray, rightArray) => {
  let i = 0;
  let j = 0;
  let sortedArray = [];
  debugger;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      sortedArray.push(leftArray[i]);

      i++;
    } else {
      sortedArray.push(rightArray[j]);
      j++;
    }
  }

  for (var k = i; k < leftArray.length; k++) {
    sortedArray.push(leftArray[k]);
  }

  for (var l = j; l < rightArray.length; l++) {
    sortedArray.push(rightArray[l]);
  }

  return sortedArray;
};

console.log(mergeSort(array));
