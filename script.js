let firstBtn = document.getElementById('one');
let plusBtn = document.getElementById('plusBtn');
let eraseBtn = document.getElementById('btn-erase');
let equalBtn = document.getElementById('btnequal');
let txt = document.getElementById('txt-calc');
let mode = ''


plusBtn.onclick = () => addOperator('+', 'addition');
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
        mode = 'addition'
        console.log(`mode : ${mode}`)
    }
}
function operate(a,b) {
    if (mode == 'addition') {
        let half = txt.textContent.split('+');
        const num = Number(half[0]) + Number(half[1])
        txt.textContent = num;
        mode = ''
        console.log(`mode : ${mode}`)
    }
}



