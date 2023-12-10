console.log('client.js is sourced!');

displayCalculationResults();

let resultHistory = {};

function operatorEvent (event) {
    let newOperator = event.target.textContent
    resultHistory.operator = newOperator
    console.log(resultHistory);
    event.preventDefault();
}

function calculateNumbers(event) {
    let firstNumber = document.getElementById("firstNumber").value
    let secondNumber = document.getElementById("secondNumber").value
    resultHistory.firstNumber;
    resultHistory.secondNumber;
    event.preventDefault();
}