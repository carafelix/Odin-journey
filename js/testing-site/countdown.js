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
        // using while, i scope is global here.

        let i = 10;

        while (i !== -1) {  //while loops are dangerous, last time it crashed the my pc
            const para = document.createElement('p');
            output.appendChild(para);

            if (i == 10) {
                    para.textContent = `Initilize Countdown... ${i}`;

                } else if (i == 0) {
                    para.textContent = `${i} KABOOOM!`;

                } else {
                    para.textContent = `${i}`;
                }
            i--
        }


//         let i = 3;

//         while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//         alert( i );
//         i--;
// }