// console.log ('Hi, how are you?')

// // let message = 'Hello!', // define the variable and assign the value, coma (+ start for readibility) multiple assign, could also repeat let ;
// // user = 'John',
// // age = 25;

// let hello = 'Hello world!';

// let message;

// // copy 'Hello world' from hello into message
// message = hello;

// // now two variables hold the same data
// alert(message); // Hello world!

// // Declare two variables: admin and name.
// let admin;
// // Assign the value "John" to name.
// let name = "Jhon";
// // Copy the value from name to admin.
// admin = name;
// // Show the value of admin using alert (must output “John”).
// alert(admin);




// //Create a variable with the name of our planet. How would you name such a variable?

// let planetEarth;

// // Create a variable to store the name of a current visitor to a website. How would you name that variable?

// let currentUserName;

// const myInt = 5;
// const myFloat = 6.667;
// myInt;
// myFloat;

// let a = 10
// let b = 7 * a

// const max = 57;
// let actual = max - 13
// let percentage = actual / max

// console.log(percentage);

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

// let name = "John";

// // embed a variable
// alert( `Hello, ${name}!` ); // Hello, John!

// // embed an expression
// alert( `the result is ${1 + 2}` ); // the result is 3


// To replace case insensitive, use a regular expression with an /i flag (insensitive):
// Example
// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");

// To replace all matches, use a regular expression with a /g flag (global match):
// Example
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// Regular expressions are written without quotes.

// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// if (age >= 14 && age <= 90);

// if (!(age >= 14 && age <= 90));          clever!

// if (age < 14 || age > 90);

// https://javascript.info/task/check-login
// Im quite sure im missing a way to do something like ('' XOR null) and return the last truthly value. 
// How do I Loop effectivelly without f5 method? Im quite sure this could be resume quite a bit


const usrAdmin = "Admin";
const usrPw = "TheMaster";
let begin = prompt("Who's there?");
let pwprompt;

if (begin === usrAdmin) {

  pwprompt = prompt("Password?")

    if ( pwprompt === usrPw) {
      alert("Welcome")
    }
    else if ( pwprompt == ('') ) {
      alert ( "Please enter a Password" ) 
      location.reload();
    }
    else if ( pwprompt == (null) ) {
      alert ( "Canceled")          
    }

    else if ( pwprompt == !usrPw) {
      alert ( "Wrong Password")
    }

}

else if ( begin == (null) ) {
    alert( "Canceled" );
} 

else if ( begin == ('') ) {
  alert( "Please enter a name" );
    // setTimeout(function(){
      location.reload();
  // }, 1000);
} 

else if ( begin != usrAdmin ) {
    alert( "who are you?" )
}