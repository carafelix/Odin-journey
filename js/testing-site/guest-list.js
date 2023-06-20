const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (let person of people) {

    if (person === 'Phil' || person === 'Lola') {

        refused.textContent += `${person}, ` ;  
        
    } else {
        
        admitted.textContent += `${person}, ` ;
    }
}

refused.textContent = replaceComma(refused.textContent); 
admitted.textContent = replaceComma(admitted.textContent);



function lastComma (str) {
    return str.lastIndexOf(',');
}

function replaceComma (str) {
    let trim = str.trimEnd();
    trim = trim.slice(0, lastComma(str))
    return trim + '.'
}