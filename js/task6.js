let BinaryConverter = new Object();

window.onload = function () {
    let converterInput = document.getElementById("converterInput");
    let inputValue = converterInput.value;
    let inputArr = inputValue.split("");

    function converterInputClick() {
        inputValue = BinaryConverter.Convert(dateInput.value);
    }

    dateInputButton.addEventListener("click", converterInputClick(inputArr));

}


BinaryConverter.Convert = function Convert(arr) {




    let len = arr.length;
    let pow = [];
    let decimal = [];
    for (let i = 0; i <= len - 1; i++) {
        pow.unshift(i);
    }
    arr.forEach((x, index) => {
        decimal.push(x * 2 ** pow[index]);
    })
    let toDecimal = decimal.reduce((acc, curr) => acc + curr, 0);
    return toDecimal;



}
