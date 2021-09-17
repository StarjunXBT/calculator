// Num Button
const firstBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five')
const sixBtn = document.getElementById('six')
const sevenBtn = document.getElementById('seven')
const eightBtn = document.getElementById('eight')
const nineBtn = document.getElementById('nine')
const zeroBtn = document.getElementById('zero')

// Operator Button
const plusBtn = document.getElementById('plusBtn');
const subBtn = document.getElementById('sub-btn')
const multBtn = document.getElementById('multiplication')
const divideBtn = document.getElementById('dividebtn')

// Erase & Del buttons
const eraseBtn = document.getElementById('btn-erase');
const deleteBtn = document.getElementById('btn-del')
const equalBtn = document.getElementById('btnequal');
// Var
let txt = document.getElementById('txt-calc');
let mode = ''

plusBtn.onclick = () => addOperator('+', 'addition');
subBtn.onclick = () => addOperator('-', 'substraction');
divideBtn.onclick= () => addOperator('/', 'divide');
multBtn.onclick = () => addOperator('x', 'multiplication');

// Num func
firstBtn.onclick = () => addTextNode(1);
twoBtn.onclick = () => addTextNode(2);
threeBtn.onclick = () => addTextNode(3);
fourBtn.onclick = () => addTextNode(4);
fiveBtn.onclick = () => addTextNode(5);
sixBtn.onclick = () => addTextNode(6);
sevenBtn.onclick = () => addTextNode(7);
eightBtn.onclick = () => addTextNode(8)
nineBtn.onclick = () => addTextNode(9)
zeroBtn.onclick = () => addTextNode(0)

eraseBtn.onclick = () => erase();
equalBtn.onclick = () => operate()
deleteBtn.onclick = () => del()
// Erase & Del Func
function erase() {
    txt.textContent = '';
    mode = '';
}
function del() {
    mode = '';
    let lastNth = txt.textContent.substring(0, txt.textContent.length-1)
    txt.textContent = lastNth;
}

// Num & Operator func
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
    else if (operator == '/' && calc == 'divide' && mode == '') {
        let operand = document.createTextNode('/');
        txt.appendChild(operand);
        mode = 'divide';
    }
}

// Calcul func
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



