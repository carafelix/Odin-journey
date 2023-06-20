//#region log lop
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//#endregion

// Tower of Hanoi

//#region Brute_Method ????????????????

// Move the smaller ring into the third empty column
// Move the second to smaller ring into the second empty column
// Stack the smaller ring into the second column
// Move the 3toS into the third empty column
// Move the smaller ring from the second column to the frist column
// Move the 2toS ring from the second column to the third column
// Stack the smaller ring from the first column to the third column
// Move the 4toS ring from the first column to the second empty column
// Move the smaller ring from the third column to the first column
// Move the 2toS ring from the third column to the second colum
// Step-Stack the smaller ring from the first column to the second column
// Move the 3toS ring from the third column to the first column
// Move the smaller ring from the second column to the third column
// move the 2toS ring from the second column to the first column
// Stack the smaller ring from the third column to the first column
// Repeat (since 4toS is already on the 2nd column and a larger-to-smaller order is reached on the first column)

//#endregion

//#region Somewhat good approaches

// If approach

// Check: Is there an empty column?
// If so: check: is the first column ordered from larger to smaller?
// If so, take the smaller ring from that column and place it in the closer avalible column
// If there is not an empty column, take the smaller relative ring on top fo the second to smaller relative ring whereas it is
// If there is not an empty column and last condition is already met, distribute the smaller ring of that stack into the stack where the larger ring is at surface
// If there is not an empty column and the second relative ring is able to stack on to the larger subsecuent relative ring


// Algorithmic approach

// while empty column is true, distribute the larger avalible ring to fill the bottom of it
// if all columns are occupied, stack the smaller avalible ring into the top of the closer larger avalible ring until there is an empty column

//#endregion

// for (const x of y) || of of of of
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#the_for...of_loop

// map() do something to each item of an array/objet and returns a new array/objet with those changes


//filter('a function that test something and returns boolean')
//#region 

function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]

//#endregion 

const filtereded = cats.filter((cat) => cat.startsWith("L")); // ooh lovely!

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#map_and_filter


// So much learned here
  
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});


// continue stops the loop iteration there and goes trough the next iteration:
// prime example: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#skipping_iterations_with_continue

// do... while execute the code atleast onces