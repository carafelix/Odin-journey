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



function playSound(event) { //  wrap the function, not declaring it inside this function, too messy if not
        // easier to understand. 
        // each time you press a key it pass a function that queries the matching audio node with the same data-key attribute
        // based on the running function event.code (the key pressed)
        // and assign that to a local variable 
        const sound = this.document.querySelector(`audio[data-key="${event.code}"]`); // 'this.' so powerful. 
        const tecla = this.document.querySelector(`.key[data-key="${event.code}"]`); 
    
        if (!sound) {return};
        // sound.currentTime = 0; // rewind 
        // sound.play();     
        const newAudio = sound.cloneNode();
        tecla.classList.add('playing');
        newAudio.play();
        // tecla.classList.toggle('playing'); 
    
        // console.log(tecla);                                
    
        // console.log(sound);                                
    
}

function removeTransition(event) {
    if(event.propertyName !== 'transform') {
        return
    }
    this.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition) )  //transitionend is a eventType, when that fires, the other parameter functions fires
                                                        // is not removeTransition()!!!! its just removeTransition

window.addEventListener('keydown', playSound); 



