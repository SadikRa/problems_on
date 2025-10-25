// console.log('hello sadik');

const names = ["sadik", "also sadik", "yah, sadik", "okh, sadik"];

// console.log(names);

// console.log(undefined === null);

// console.log(['object'] == 'object');

// &&
// ||
// !

const user = {
  id: 1,
  name: "Amir",
  job: "Actor",
};
const userJSON = JSON.stringify(user);
// console.log(userJSON);

const value = 4;

// switch (value) {
//   case 3:
//     console.log("okh 3 is okh");
//     break;
//   case 4:
//     console.log("no 2 is not okh");
//     break;
//   default:
//     console.log("okey");
//     break;
// }

let count = 0;

while (count < 5) {
  // console.log("Count is: " + count);
  count++;
}

// console.log(count);

const arr = [1, 2, 4, 3];

for (let value of arr) {
  // console.log(value);
}

const object = { name: "sadik", age: "23" };

// console.log(object.name);
// for(let key in object){
//   console.log(key);
// }

const arrayS = [1, 2, 23, 2, 3, 43, 3];

const [a, b, ...c] = arrayS;

// console.log(a);
// console.log(b);
// console.log(c);

const mySet = new Set();
mySet.add(1);
// mySet.delete(1)
mySet.has(1);
mySet.size;

for (const value of mySet) {
  // console.log(value);
}

const myMap = new Map();

// const numberMap = new Map([1, "one"], [2, "two"]);

myMap.set(4, "four");
myMap.delete(4);
myMap.get(4);


