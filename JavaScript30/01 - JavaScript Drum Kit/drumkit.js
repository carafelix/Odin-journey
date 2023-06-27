// window event listener test

// window.addEventListener(
//     'keydown', (e) => {
//         console.log(e.code)  // .key !== .code
//     }
// );

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

// window event listener

window.addEventListener('keydown', function(event) {    // easier to understand
    // each time you press a key it pass a function that queries the matching audio node with the same data-key attribute
     // based on the running function event.code (the key pressed)
     // and assign that to a local variable 
    const sound = this.document.querySelector(`audio[data-key="${event.code}"]`) // 'this.' powerful. also audio[attribute]
     

    console.log(sound);                                
});



// callback function

// function playSound(event){
//     const 
//     if (div.getAttribute('data-key') === sound.getAttribute('data-key')) {
//         console.log("hola")
//     }
// };



