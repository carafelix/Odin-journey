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

