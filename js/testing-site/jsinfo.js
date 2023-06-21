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