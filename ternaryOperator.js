//Ternary Operators

let showRecipeOne = true;

function getRecipeOne(recipeName) {
    return recipeName;
}

function getRecipeTwo(recipeName) {
    return recipeName;
}

// if(showRecipeOne) {
//     console.log(getRecipeOne("Cheese Paneer Tikka"));

// } else {
//     console.log(getRecipeTwo("Pizza"));
// }

showRecipeOne
    ? console.log(getRecipeOne("Cheese Paneer Tikka"))
    : console.log(getRecipeTwo("Pizza")); //Ternary Operation
