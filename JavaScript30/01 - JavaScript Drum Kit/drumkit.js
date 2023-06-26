window.addEventListener(
    'keydown', (e) => {
        console.log(e.code)  // .key !== .code
    }
);


const keys = document.querySelectorAll('.key');
const kbd = document.querySelectorAll('kbd')


keys.forEach((key) => {
    key.setAttribute('data-key', `Key${key.firstElementChild.innerText}`)
});

function getKey(x) {
    return x
};


console.log (keys);
console.log(kbd);
console.log(kbd[0].innerText)