window.addEventListener(
    'keydown', (e) => {
        console.log(e.code)  // .key !== .code
    }
);


const keys = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio')

keys.forEach((key) => {
    key.setAttribute('data-key', `Key${key.firstElementChild.innerText}`)
});