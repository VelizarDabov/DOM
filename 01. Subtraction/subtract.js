function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secontNum = document.getElementById('secondNumber').value;

    let result = Number(firstNum) - Number(secontNum);
const resultDiv = document.getElementById('result');
    resultDiv.textContent = result
}