let BinaryConverter = new Object();
let converterInput;
let inputVal;
let converterButton;
let inputArr;


window.onload = function() {

    converterInput = document.getElementById("converterInput");


    converterButton = document.querySelector(".subtask3__button");

    inputArr = converterInput.value.trim().split('');

    function converterInputClick() {
        inputVal = converterInput.value;
        inputVal.replace(/\D/g, "");
        inputArr = converterInput.value.trim().split('');
        inputVal = BinaryConverter.Convert(inputArr);
    }



    converterButton.addEventListener("click", converterInputClick);

}

BinaryConverter.Convert = function Convert(arr) {


    function convertInput(inpStr) {
        inpStr.join('');
        return parseInt(inpStr, 2); //chooseParam(inputArr)

    }
    convertInput(arr);

    function convertOutput(outStr) {
        return parseInt(outStr, 10);
    }
    convertOutput(arr);
    return arr.toString();
    //!TODO  
    //     function chooseParam(array) {
    //         забираем значение обоих селектов и от этого отталкиваемся
    //     }

}




//BinaryConverter.Convert(inputArr);