let myOperation = "12+12+12+12+12+12+12"

let stack = myOperation.split('').filter(elem => Number.isNaN(Number(elem)))
let outputq = myOperation.split('+').join(',').split('*').join(',').split('/').join(',').split('*').join(',').split('-').join(',').split(',')
let count = outputq.length
// Pop out of stack 
while (stack.length) outputq.push(stack.pop())
// Shift out of queue
for (let i = 0; i < count; i++) stack.push(outputq.shift())
stack = stack.filter(e => e)
console.log('fullstack', stack)
console.log('pile', outputq)



stack.forEach(element => {
    while(stack.length !== 1) {
        let A = stack.pop();
        let B = stack.pop();
        let operand = outputq.shift();
        console.log(A, B, operand)
        const Operation = {
            '+' : () => stack.push(Number(A)+Number(B)),
            '/' : () => stack.push(Number(A)/Number(B)),
            '-' : () => stack.push(Number(A)-Number(B)),
            '*' : () => stack.push(Number(A)*Number(B)),
            'default' : () => console.log('Default')
        }
        txt.textContent = Operation[operand]()
    }
})

console.log(stack)

