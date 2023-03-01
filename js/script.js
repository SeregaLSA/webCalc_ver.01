let a = '';
let b = '';
let sing = '';
let finish = false;

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const znak = ['-', '+', '*', '/'];

const out = document.querySelector('.output_calc');

function clearAll() {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('')) return;

    
}