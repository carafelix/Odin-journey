const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
let admTxt = 'Admit: ';
let refTxt = 'Refuse: ';

for (let person of people) {

    if (person === 'Phil' || person === 'Lola') {

        refTxt += `${person}, ` ;  
        
    } else {
        
        admTxt += `${person}, ` ;
    }
}
function lastComma (str) {
    return str.lastIndexOf(',');
}

function replaceComma (str) {
    let trim = str.trimEnd();
    trim = trim.slice(0, lastComma(str))
    return trim + '.'
}

admTxt = replaceComma(admTxt); 
refTxt = replaceComma(refTxt);

admitted.textContent = admTxt;
refused.textContent = refTxt;
