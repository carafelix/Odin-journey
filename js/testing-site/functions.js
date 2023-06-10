function hello(name = "Veet") {
    console.log(`Hello ${name}!`);
  }

  function hi(matematiks = Math.random()) {
    alert(`Soy el famoso numero ${matematiks} jajajaja!`);
  }

  (function () {
    alert("hello");
  });
  
// This is called an anonymous function, because it has no name. 
// You'll often see anonymous functions when a function expects to receive another function as a parameter. 
// In this case the function parameter is often passed as an anonymous function.

// Note: This form of creating a function is also known as function expression.
//  Unlike function declaration, function expressions are not hoisted.
