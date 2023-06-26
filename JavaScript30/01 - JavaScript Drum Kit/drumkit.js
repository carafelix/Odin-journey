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

function getIndex() {
    return audioKey.shift()
}

audios.forEach(audio => {
    audio.setAttribute('data-key', `Key${getIndex()}`)
});


console.log(audioKey);