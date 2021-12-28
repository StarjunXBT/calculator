// Select Buttons
buttons = document.querySelectorAll('button')
console.log(buttons);
buttons.forEach(element => element.addEventListener('click', writelol))
txt = document.getElementById('txt-calc')

function writelol(e) {
    const logNum = {
        '+': () => number_operand(),
        '-': () => number_operand(),
        'X': () => txt.textContent+="*",
        '/': () => number_operand(),
        '0' : () => number_operand(),
        '1' : () => number_operand(),
        '2' : () => number_operand(),
        '3' : () => number_operand(),
        '4' : () => number_operand(),
        '5' : () => number_operand(),
        '6' : () => number_operand(),
        '7' : () => number_operand(),
        '8' : () => number_operand(),
        '9' : () => number_operand(),
        '=' : () => toolong(txt.textContent),
        'Delete' : () => txt.textContent = txt.textContent.slice(0,-1),
        'default' : () => console.log('default')
      };
      // Handle error
      (logNum[e.target.textContent] || logNum['default'])();      


    function number_operand() {
        return txt.textContent += e.target.textContent;
    }

}

function toolong(myOperation) {
    console.log(myOperation)
    let stack = myOperation.split('').filter(elem => Number.isNaN(Number(elem)))
    let outputq = myOperation.split('+').join(',').split('*').join(',').split('/').join(',').split('*').join(',').split('-').join(',').split(',')
    let count = outputq.length
    // Pop out of stack 
    while (stack.length) outputq.push(stack.pop())
    // Shift out of queue
    for (let i = 0; i < count; i++) stack.push(outputq.shift())
        while(stack.length !== 1) {
        let A = stack.pop();
        let B = stack.pop();
        let operand = outputq.shift();
        const Operation = {
            '+' : () => stack.push(Number(B)+Number(A)),
            '/' : () => stack.push(Number(B)/Number(A)),
            '-' : () => stack.push(Number(B)-Number(A)),
            '*' : () => stack.push(Number(B)*Number(A)),
        }
        Operation[operand]()
}
txt.textContent = stack.join('')
}



