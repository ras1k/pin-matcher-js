function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    // console.log(getPin());
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = getPin();

    const pinSuccessMessage = document.getElementById('pin-success');
    pinSuccessMessage.style.display = 'none';
    const pinFalureMessage = document.getElementById('pin-failure');
    pinFalureMessage.style.display = 'none';
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const displayPin = displayPinField.value;
    console.log(displayPin)
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    displayPinField.value = '';
    typedNumberField.value = '';
    console.log(typedNumber);
    if (displayPin === typedNumber) {
        const pinSuccessMessage = document.getElementById('pin-success');
        pinSuccessMessage.style.display = 'block'
    }
    else {
        const pinFalureMessage = document.getElementById('pin-failure');
        pinFalureMessage.style.display = 'block';
    }
})

