window.addEventListener(
    'keydown', (e) => {
        console.log(e.code)  // .key !== .code
    }
);


const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('audio')

const audioKey = [];

keys.forEach(key => {
    key.setAttribute('data-key', `Key${key.firstElementChild.innerText}`)
    audioKey.push(key.firstElementChild.innerText)
});

audios.forEach(audio => {
    audio
});

console.log(audioKey);