//map, filter, find, some, every, includes, indexOf, findIndex


//map 
const userInfo = [
  {
    name: "user1",
    age: 20,
    Country: "Germany"
  },
  {
    name: "user2",
    age: 25,
    Country: "China"
  },
  {
    name: "user3",
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