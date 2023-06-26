// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

// oh thanks, now I understood forEach ahahah the inside callback functions gets pass each element inside it as an argument
// html; <x on[eventType]>zzz<x> <<<< x.onclick = () => alert("Hello World"); <<<<<< x.addEventListener('eventType', functionEtc)