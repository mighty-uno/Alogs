const fibonacci = (value) => {
  if (value === 1) {
    return value;
  }

  return value * fibonacci(value - 1);
};

// console.log(fibonacci(4));

const reverseString = (str) => {
  let newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  return newStr;
};

const reverseString2 = (str, length, newStr) => {
  if (length == 0) {
    return newStr;
  }
  newStr = newStr + str[length - 1];
  length--;

  return reverseString2(str, length, newStr);
};

console.log(reverseString2("himanshu", "himanshu".length, ""));
