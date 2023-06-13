function hello(name = "Veet") {
    console.log(`Hello ${name}!`);
  }

  function hi(matematiks = Math.random()) {
    alert(`Soy el famoso numero ${matematiks} jajajaja!`);
  }

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_function_example

  (function () {
    alert("hello");
  });
  
// This is called an anonymous function, because it has no name. 
// You'll often see anonymous functions when a function expects to receive another function as a parameter. 
// In this case the function parameter is often passed as an anonymous function.

// Note: This form of creating a function is also known as function expression.
//  Unlike function declaration, function expressions are not hoisted.

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

// If a same-named variable is declared inside the function then it shadows the outer one.
// For instance, in the code below the function uses the local userName. The outer one is ignored: https://javascript.info/function-basics#outer-variables

// One additional thing. You can also 'modify in place' with the nullish coalescing operator, like ++ or so:

// let num = null
// console.log(num??=10)
// //10

// If you console.log(num) again, you get 10.
// So the value of num has been modified in place.

// let int = 1
// console.log(int??=10)
// //1

// Here the value of int is not modified, it remains 1, because it’s neither null nor undefined. 

function min(a, b) {
  if (a>b) {
    return b
  } else {
    return a
  }
}