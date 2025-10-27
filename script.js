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

function welcome(a, b) {
  // console.log(a, b);
}

welcome(1, 2);

const users = [
  { name: "sadik", age: 23 },
  { name: "sadikF", age: 23 },
];

// const nmaes = users.map((nam) => console.log(nam.name))

const namN = [1, 2, 3, 5, 4, 4, 5, 4, 5, 6];

const even = namN.filter((num) => num % 2 === 0);
const odd = namN.filter((num) => num % 2 === 1);

// console.log(even, odd);

///TO DO
///promise

const shop = {
  owner: "Alia",
  address: {
    street: "kochukhet voot er goli",
    city: "ranbir",
    country: "BD",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

const shopJSON = JSON.stringify(shop);

// const orderFood = new Promise((resolve, reject) => {
//   const foodReady = false;

//   if (foodReady) {
//     resolve("yap, food is ready");
//   } else {
//     reject("nah, our food is rotten");
//   }
// });

// // orderFood
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url); // or

// const data = fetch("https://jsonplaceholder.typicode.com/users");

// console.log("data", data);

//get

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Post
const url = "www.sadik.com";
const user1 = { name: sadik, age: 23 };

fetch(url, {
  method: "POST",
  body: JSON.stringify(user1),
  headers: {
    "Content-type": "application/json",
  },
})
  // .then((response) => response.json())
  // .then((data) => console.log(data))
  // .catch((error) => console.error(error));
