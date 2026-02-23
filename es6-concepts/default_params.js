function add(num1 = 1, num2 = 3) { //given default parameters to num1 & num2
  return num1 + num2;
}

let result = add(12,13);
console.log(result);


//if somehow we misses to give arguments to the function call, that will automatically take the default values
// and will perform the operation
// 
// otherwise if we give specific arguments , than the default ones will be overwritten and result will bee provided.


//Spread operator
const array = [2, 3, 5, 8, 10];
const array2 = [1, 4, 6, 7];
console.log([...array2, ...array, 110]);

//Rest parameters

function getNumbers(a, b, ...c) {
  console.log(a, b, ...c);
}

getNumbers(1,2,3,4,5);