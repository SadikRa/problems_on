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

var createCounter = function(init) {
    const original = init;
    let count = init;
    return{
        increment(){
            count++;
            return count
        },
        decrement(){
            count--;
            return count
        },
        reset(){
            count = original;
            return count
        }
    }
};


