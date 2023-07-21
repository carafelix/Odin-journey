function calla() {
    let vetis = ''
    for (i = 1; i <=10; i++) {
        if (i % 2 === 0) {
            vetis += `${i} `
        }
        
    } return vetis.trimEnd();
}


function inputHundred() {

    let input = +prompt('numba')
    
    while (input < 100) {
        if (input == !Number) {
            break;
            
        } else {
        input = +prompt('numba');

        }
    }
}

// really should have made a diagram for this... the website stated the pseudocode so obviously :c
// do not try to cheesse things :l
// I think its possible to refactor (negatively tho) this to use an array (besides just storing nominator in an array an using for cat of cats jaja) with 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments &
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

function printPrimes(int) { // I attempted this for like 2 hours but was logging inside the inner loop and missuse continue without label
    
    primeCheck:
    for (let nominator = 2; nominator <= int; nominator++) {
      for (let denominator = 2; denominator < nominator; denominator++) { 
        if (Math.ceil(nominator/denominator) == (nominator/denominator)) {  // same as nominator % denominator == 0
            continue primeCheck; // next iteration of the labeled loop!! 
        } 
      }
    
      console.log(nominator);  // skipped log when continue is call
    }

}

camelize("list-style-image") 

function camelizee(str){         // thats not right, it does't have to do the first one. Plus it is super ugly
    let words = str.split('-');
    let veet = []
    words.forEach(function(word){

        veet.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
        });
        return veet.join('')
};



function camelize(str){
    let words = str.split('-');
    let veet = [];
    words.forEach(word=>{
            if (word == words[0])  {
                
                veet.push(words[0]);

                        }
                        else    {
                                veet.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()))

                        }
        })
        
        return veet.join('')

    
}



// js info solution

function camelizey(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1); // this is accessing the charAt with word[0]! forgot you can do that on strings hahah
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }


  numar.sort((a,b) => a>b ? -1 : 1) ;

  function copySorted(arr){
    return arr.slice().sort()
  } ;



    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    // let users = [ john, pete, mary ];

    let names = users.slice().map((user) => user.name);

   
    // function sortByAge(arr){
    //     return arr.sort((a,b)=>{
    //     if (a.age > b.age){
    //         return 1
    //     } else return -1
    //     })
    // } 

    function sortByAge(arr){
        return arr.sort((a,b) => (a.age > b.age) ? 1 : -1)
    }

    let nArr = [1,2,3,4,5,6]; 

    // function shuffle(arr){
    //     return arr.sort((a,b)=>{
    //       if (Math.random()> 0.5){
    //         return 1
    //       } else return -1
    //     })
    //   }

      function shuffle(arr){
        return arr.sort((a,b)=>(Math.random()   >  0.5) ? 1 : -1)
      }

      function getAverageAge(arr){
        return arr.reduce((acc, element) => acc + element.age, 0) / arr.length; //super important only 'b' has .age since 'a' is initially 0 and then its the comulative!
      } 



    function unique(arr) {
      let unique = []
      arr.map((word)=>{
        if (!unique.includes(word)){
          unique.push(word);
        }
      })
      return unique;
    }

    let strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    alert( unique(strings) ); // Hare, Krishna, :-O







    let users = [
      {id: 'john', name: "John Smith", age: 20},
      {id: 'ann', name: "Ann Smith", age: 24},
      {id: 'pete', name: "Pete Peterson", age: 31},
    ];
    
    let usersById = groupById(users);

    function groupById(array) {                 // importanttttttttttttttttttttttttttttttttttttt
      return array.reduce((obj, value) => {
        obj[value.id] = value; // like x[i] in for loops
        return obj;
      }, {}) // basically a push into obj
    }

    function usrById(id, usr){
      this.id = id;
      this.usr = usr;
    }

    function removeDuplicates(array) {
      return array.filter((acc, current) => array.indexOf(acc) === current) // nice
      };

    //  https://javascript.info/task/calculator-extendable