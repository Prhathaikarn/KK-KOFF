// DOM : INPUT
const priceInput = document.getElementById('product-price');
const quantityInput = document.getElementById('product-quantity')
const shippingInput = document.getElementById('product-shipping')

// DOM : SHOW RESULT
const errorBox = document.getElementById('error')
const resultBox = document.getElementById('result')

// DOM : Event Handler
const totalBtn = document.getElementById('total-btn')

const parseInput = (...inputs) => {
    return inputs.map((str) => Number(str))
};

// let r = parseInput('500', '2', '100', '600');

// console.log(r);

const validateInputs = (...inputs) => {
    return inputs.every((el) => typeof el === 'number' && !isNaN(el))
};

let r = validateInputs(1, 5, '5');
console.log(r);


// HIDE ERROR
const hideError = () => {
    errorBox.classList.add('invisible')
};
hideError();

// SHOW ERROR
const showError = () => {
    errorBox.classList.remove('invisible')
}

const showErrorMessage = (inputs, number) => {
    const fullErrorMsg = inputs.reduce((msg, str, index) => {
        if (validateInputs(number[index])) {
            msg += '';
        } else {
            msg += `${str} is not a number. `;
        }
        return msg;
    }, '');

    // console.log(fullErrorMsg);
    errorBox.innerText = fullErrorMsg;
    showError();
};


// CalTOTAL
const calTotal = () => {
hideError();

    // Parse Input
    const inputs = [priceInput.value, quantityInput.value, shippingInput.value]
    const numbers = parseInput(...inputs);
    console.log(numbers);
    // Validate Input
    const valid = validateInputs(...numbers);
    // Pass : calTotal
    // fail : show Error
    if (valid) {
        const [price,quantity,shipping] = numbers;
        const totalPrice = price * quantity + shipping;
        resultBox.innerText = totalPrice;
    } else {
        showErrorMessage(inputs, numbers);
    }
};
totalBtn.addEventListener('click', calTotal);
