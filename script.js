let firstBtn = document.getElementById('one');
let plusBtn = document.getElementById('plusBtn');
let eraseBtn = document.getElementById('btn-erase');
let equalBtn = document.getElementById('btnequal');
let txt = document.getElementById('txt-calc');
let mode = ''


plusBtn.onclick = () => addTextNode('+');
firstBtn.onclick = () => addTextNode(1, 'addition');
eraseBtn.onclick = () => txt.textContent = '';
equalBtn.onclick = () => operate()


function addTextNode(hereIsYourText, setMode) {
    let newtext = document.createTextNode(hereIsYourText);
    txt.appendChild(newtext);
    mode = setMode
}
function add(a,b) {
return a+b;
}
function multiply(a,b) {
    return a*b;
}
function substract(a,b) {
    return a-b;
}
function divide(a,b) {
    return a/b;
}
function operate(a,b) {
    if (mode == 'addition') {
        let test = txt.textContent.split('+');
        const num = Number(test[0]) + Number(test[1])
        console.log(test, num)
        txt.textContent = num;
    }
}



