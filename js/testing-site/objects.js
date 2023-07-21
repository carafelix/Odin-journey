let user = {
    name: "Jhon",
    surname: "Smith",
};

user.name = "Pete";

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

  function isEmptiu(obj) {
    return Object.keys(obj).length === 0 // && obj.constructor === Object | type checking. similar to typeof
    }

  function sumSalaries(salaries){
    let sum = 0;
        for (let employee in salaries){
            sum += salaries[employee]
        }
        return sum;
  }

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  

  function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *=   2;
        } else continue
    }
    return obj
  }

  const salva = createPerson("Salva");
  function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

  // Constructors, by convention, start with a capital letter and are named for the type of object they create.
  //  So we could rewrite our example like this:

  function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
  