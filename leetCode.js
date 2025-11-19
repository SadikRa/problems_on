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

///Array Reduce Transformation

var reduce = function (nums, fn, init) {
  let val = init;

  if (nums.length === 0) {
    return init;
  } else {
    nums.forEach((num) => {
      val = fn(val, num);
    });
  }
  return val;
};

// 2629. Function Composition

var compose = function (functions) {
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};
