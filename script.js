// Num Button
const firstBtn = document.getElementById('one');
// Operator Button
const plusBtn = document.getElementById('plusBtn');
const subBtn = document.getElementById('sub-btn')
const multBtn = document.getElementById('multiplication')
const divideBtn = document.getElementById('dividebtn')
// Function buttons
const eraseBtn = document.getElementById('btn-erase');
const equalBtn = document.getElementById('btnequal');
// Hi
let txt = document.getElementById('txt-calc');
let mode = ''

plusBtn.onclick = () => addOperator('+', 'addition');
subBtn.onclick = () => addOperator('-', 'substraction');
divideBtn.onclick= () => addOperator('/', 'divide');
multBtn.onclick = () => addOperator('x', 'multiplication');

firstBtn.onclick = () => addTextNode(1);
eraseBtn.onclick = () => erase();
equalBtn.onclick = () => operate()

function erase() {
    txt.textContent = '';
    mode = '';
}
function addTextNode(hereIsYourText) {
    let newtext = document.createTextNode(hereIsYourText);
    txt.appendChild(newtext);
}
function addOperator(operator, calc) {
    if (operator == '+' && calc == 'addition' && mode == '') {
        let operand = document.createTextNode('+');
        txt.appendChild(operand);
        mode = 'addition';
    }
    else if (operator == '-' && calc == 'substraction' && mode == '') {
        let operand = document.createTextNode('-');
        txt.appendChild(operand);
        mode = 'substraction'
    }
    else if (operator == 'x' && calc == 'multiplication' && mode == '') {
        let operand = document.createTextNode('x');
        txt.appendChild(operand);
        mode = 'multiplication'
    }
    else {
        let operand = document.createTextNode('/');
        txt.appendChild(operand);
        mode = 'divide';
    }
}
function operate(a,b) {
    switch(mode) {
        case 'addition':           
            let half = txt.textContent.split('+');
            const num = Number(half[0]) + Number(half[1])
            txt.textContent = num;
            mode = '';
            break;

        case 'multiplication':           
            let add_half = txt.textContent.split('x');
            const anum = Number(add_half[0]) * Number(add_half[1])
            txt.textContent = anum;
            mode = '';
            break;

        case 'substraction':           
            let sub_half = txt.textContent.split('-');
            const snum = Number(sub_half[0]) - Number(sub_half[1])
            txt.textContent = snum;
            mode = ''
            break;
        case 'divide':
            let div_half = txt.textContent.split('/')
            const dnum = Number(div_half[0]) / Number(div_half[1])
            txt.textContent = dnum;
            mode = ''
            break;
    }
}



