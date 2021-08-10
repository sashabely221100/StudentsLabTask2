class CachingCalculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNum(num) {


        if (num === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + num.toString();
    }
    chooseOperator(operation) {


        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.calculate();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand; //moves cur opperand to prev opperand div
        this.currentOperand = '';




    }



    calculate() {
        let computation;
        const prevVal = parseFloat(this.previousOperand);
        const currentVal = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prevVal + currentVal;
                break;
            case '-':
                computation = prevVal - currentVal;
                break;
            case '*':
                computation = prevVal * currentVal;
                break;
            case '÷':
                computation = prevVal / currentVal;
                break;
            default:
                return;
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }


    displayNumber(num) {
        const floatNum = parseFloat(num);
        if (isNaN(floatNum)) return '';

        return floatNum.toLocaleString('en');
    }

    update() {
        this.currentOperandTextElement.innerText =
            this.displayNumber(this.currentOperand);
        if (this.operation) {
            this.previousOperandTextElement.innerText =
                `${this.displayNumber(previousOperand)} ${this.operation}`

        }
    }
}





const numberButtons = document.querySelectorAll('[data-number]');
const calcButtons = document.querySelectorAll('[data-calculation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(".calculator__previous-value");
const currentOperandTextElement = document.querySelector(".calculator__current-value");

const calculator = new CachingCalculator(previousOperandTextElement, currentOperandTextElement);



numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNum(btn.innerText);
        calculator.update();
    })
});


calcButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperator(btn.innerText);
        calculator.update();
    })
});

allClearButton.addEventListener('click', btn => {
    calculator.clear();
    calculator.update();
})

deleteButton.addEventListener('click', btn => {
    calculator.delete();
    calculator.update();
});

equalsButton.addEventListener('click', btn => {
    calculator.calculate();
    calculator.update();

})














// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//         this.clear()
//     }

//     clear() {
//         this.currentOperand = ''
//         this.previousOperand = ''
//         this.operation = undefined
//     }

//     delete() {
//         this.currentOperand = this.currentOperand.toString().slice(0, -1)
//     }

//     appendNumber(number) {
//         if (number === '.' && this.currentOperand.includes('.')) return
//         this.currentOperand = this.currentOperand.toString() + number.toString()
//     }

//     chooseOperation(operation) {
//         if (this.currentOperand === '') return
//         if (this.previousOperand !== '') {
//             this.compute()
//         }
//         this.operation = operation
//         this.previousOperand = this.currentOperand
//         this.currentOperand = ''
//     }

//     compute() {
//         let computation
//         const prev = parseFloat(this.previousOperand)
//         const current = parseFloat(this.currentOperand)
//         if (isNaN(prev) || isNaN(current)) return
//         switch (this.operation) {
//             case '+':
//                 computation = prev + current
//                 break
//             case '-':
//                 computation = prev - current
//                 break
//             case '*':
//                 computation = prev * current
//                 break
//             case '÷':
//                 computation = prev / current
//                 break
//             default:
//                 return
//         }
//         this.currentOperand = computation
//         this.operation = undefined
//         this.previousOperand = ''
//     }

//     getDisplayNumber(number) {
//         const stringNumber = number.toString()
//         const integerDigits = parseFloat(stringNumber.split('.')[0])
//         const decimalDigits = stringNumber.split('.')[1]
//         let integerDisplay
//         if (isNaN(integerDigits)) {
//             integerDisplay = ''
//         } else {
//             integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//         }
//         if (decimalDigits != null) {
//             return `${integerDisplay}.${decimalDigits}`
//         } else {
//             return integerDisplay
//         }
//     }

//     updateDisplay() {
//         this.currentOperandTextElement.innerText =
//             this.getDisplayNumber(this.currentOperand)
//         if (this.operation != null) {
//             this.previousOperandTextElement.innerText =
//                 `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//         } else {
//             this.previousOperandTextElement.innerText = ''
//         }
//     }
// }


// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
// })

// allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
// })

// deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
// })
//