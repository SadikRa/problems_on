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


