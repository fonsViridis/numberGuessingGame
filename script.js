'use strict'

let secretNumber = Math.trunc(Math.random()*20)+ 1;

// Math.trunc(); şeklinde kullanılır. Kısaca javascript de herhangi bir sayının ondalık kısmını atmaya yarar.

let score = 20;
let hightscore = 0; 

const displayMessage = function(message) {
document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    console.log(secretNumber, typeof secretNumber);

    if (!guess) {
        displayMessage('Bir sayı giriniz.' )
        }

    else if (guess === secretNumber) {
        displayMessage('Doğru tahmin!!!')
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width='30 rem';

        if (score>hightscore) {
            hightscore = score;

            document.querySelector('.hightscore').textContent = hightscore;
        }
    }

    else if (guess !== secretNumber) {
        if(score>1) {
            displayMessage(guess>secretNumber ? ':çok yüksek' : 'çok düşük')
            document.querySelector('.score') = score;
        }

        else {
            displayMessage('oyunu kaybettin');
            document.querySelector('.score').textContent=0;
        }
    }  

});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber= Math.trunc(Math.random()*20)+1;

    displayMessage('tahmin ediliyor...')
    document.querySelector('.score').textContent= score;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value= '';

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'

});

