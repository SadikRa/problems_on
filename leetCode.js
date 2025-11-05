// 2704. To Be Or Not To Be

var expect = function (val) {
  return {
    toBe: (value) => {
      if (value === val) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: (value) => {
      if (value !== val) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
};

// Counter II

var createCounter = function (init) {
  const original = init;
  let count = init;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = original;
      return count;
    },
  };
};

////Apply Transform Over Each Element in Array

var map = function (arr, fn) {
  let newArr = [];
  arr.forEach((value, index) => {
    newArr.push(fn(value, index));
  });
  return newArr;
};

/// Filter Elements from Array

var filter = function (arr, fn) {
  let filteredArr = [];
  arr.forEach((value, index) => {
    if (fn(value, index)) {
      filteredArr.push(value);
    }
  });
  return filteredArr;
};

