//map, filter, find, some, every, includes, indexOf, findIndex


//map 
const userInfo = [
  {
    name: "Hitler",
    age: 54,
    Country: "Germany"
  },
  {
    name: "Xi Jinpin",
    age: 75,
    Country: "China"
  },
  {
    name: "Arthur Chen",
    age: 29,
    Country: "China"
  },
  {
    name: "Lee Byung Hun",
    age: 28,
    Country: "South Korea"
  }
]

let userNames = userInfo.map((user, index) => {
  console.log(user, index);
  return user.name;
})

let countries = userInfo.map((user) => {
  return user.Country;
})

console.log(userNames);
console.log(countries);

//find method --> it searches the array of obj, and it just returns the very first occurence of given conditions
// it will ignore all other occurences
// SO, it must be used only in the case of UNIQUE IDENTIFICATION

let userFromChina = userInfo.find((user, index) => {
  return user.Country === 'China';
});

console.log(userFromChina);

let usersFromChina = userInfo.filter((user) => {
  return user.Country === 'China';
});

console.log(usersFromChina);

//'some' method --> it checks a condition, if any element satisfies it, it returns true otherwise returns false.


let checkCondition = userInfo.some((user) => {
  return user.age > 80;
});

console.log(checkCondition);

// while 'every' method --> it checks the given condition on every element, if every element 
// satisfies the condition then only it returns true else false.

let checkForAll = userInfo.every((user) => {
  return user.age > 25;
});

console.log(checkForAll);

//includes(element, fromIndex) --> checks if given element exists in array or not

const fruits = ["Mangoes", "Guava", "Pomegranate"];

console.log(fruits.includes("Mangoes"));

//indexOf() --> returns the index of the first occurence of element given in the array
// returns -1 if element not found

console.log(fruits.indexOf)