const master = document.querySelector('#master')
const body = document.querySelector('body')

const p = document.createElement('p');
p.classList.add('pepito');
p.textContent = 'pepito clavo un clavito';
p.style.color = 'red';

master.appendChild(p);

const headerin = document.createElement('h3');
headerin.setAttribute('id','headerin');
headerin.textContent = 'feeling blue';
headerin.style.color = 'blue';

master.insertBefore(headerin, p);

const divi = document.createElement('div');

divi.setAttribute('id', 'containerin');
// divi.style.backgroundColor = 'pink';
// divi.style.border = '2px dashed black';        // this would be always prevalent since they attach inline

const hi = document.createElement('h1');
hi.textContent = 'estoy en el div';
const pToo = document.createElement('p');
pToo.textContent = 'me too';

divi.appendChild(hi);
divi.appendChild(pToo)
master.appendChild(divi);


divi.classList.add('veet')  // better practice change styles based on changing class attributes

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


const btnPref = document.querySelector('#btn-pref');
btnPref.addEventListener('click', () => {
  alert("Hello World");
});


// ------------------------------------------------------

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  

const btnFun = document.querySelector('#fun'); 

// btnFun.onclick = alertFunction;

btnFun.addEventListener('click', alertFunction);

const botoncito = document.querySelector('#botoncito');

botoncito.addEventListener('click', function (ev) {
    console.log(ev);
  });

botoncito.addEventListener('click', function (e) {
    console.log(e.target);
  });

botoncito.addEventListener('click', function (e) {  
    e.target.style.background = 'lightblue'; //inline
  });



