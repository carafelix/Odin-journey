// set data-keys via js

const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('audio')

const audioKey = [];

function getIndex() {
    return audioKey.shift() // each time the function is called it returns the shifted value
}

keys.forEach(key => {
    key.setAttribute('data-key', `Key${key.firstElementChild.innerText}`)
    audioKey.push(key.firstElementChild.innerText)  // set up array with all letters
});

audios.forEach(audio => {
    audio.setAttribute('data-key', `Key${getIndex()}`)
});

// window

window.addEventListener(
    'keydown', (e) => {
        console.log(e.code)  // .key !== .code
    }
);