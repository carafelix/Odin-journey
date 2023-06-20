const sumArray = function(array) {
    let sum = 0;
    array.forEach(function(number) {
      sum += number;
    });
    return sum;
  };
  
  console.log(sumArray([2, 2, 2]));



// from MDN callback function

function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name."); // works with let too
  callback(name);
}

processUserInput(greeting);

