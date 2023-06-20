let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i>=0; i--) {
    const para = document.createElement('p');
    output.appendChild(para);
    if (i == 10) {
        para.textContent = `Initilize Countdown... ${i}`;
    } else if (i == 0) {
        para.textContent = `${i} KABOOOM!`;

    } else {
        para.textContent = `${i}`;
    }
}