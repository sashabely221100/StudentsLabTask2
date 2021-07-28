

let ArrayProcessingTool = new Object();
let subSum;
let search;
let selection;
let input;
let inputButton;
window.onload = function () {

    function btnClick() {
        input.value = stringToArray(input.value);
        if (subSum.checked) {
            input.value = ArrayProcessingTool.getMaxSubSumOn(input.value);
        } else if (search.checked) {
            input.value = ArrayProcessingTool.Search(input.value);
        } else if (selection.checked) {
            input.value = ArrayProcessingTool.subSumSelection(input.value);
        }

        console.log(input);
        console.log(inputButton);
    }

    subSum = document.getElementById('check1');
    search = document.getElementById('check2');
    selection = document.getElementById('check3');
    input = document.querySelector(".subtask__input");
    console.log(input);
    inputButton = document.querySelector(".subtask1__button");
    console.log(inputButton);


    inputButton.addEventListener("click", btnClick);
};

function stringToArray(arr) {
    let res = [];
    res = arr.split(",").map(x => +x);
    return res;
}



//! 1subtask O(n)
ArrayProcessingTool.getMaxSubSumOn = function getMaxSubSumOn(array) {

    let maximumSum = 0;
    let tempSum = 0;

    for (let curNumber of array) {
        tempSum += curNumber;
        maximumSum = Math.max(maximumSum, tempSum);
        if (tempSum < 0) tempSum = 0;
    }

    return maximumSum;
};

//! 1subtask o(n^2)
ArrayProcessingTool.getMaxSubSumOn2 = function getMaxSubSumOn2(array) {

    let maximumSum = 0;

    for (let index = 0; index < array.length; index++) {
        let startSum = 0;
        for (let j = index; j < array.length; j++) {
            startSum += array[j];
            maximumSum = Math.max(maximumSum, startSum);
        }
    }
    return maximumSum;
};

//! 2subtask
ArrayProcessingTool.Search = function Search(array) {
    let max = array[0];
    let min = array[0];
    let total = 0

    for (let num of array) {
        total += num;
        if (Number(num) < min)
            min = num
        if (Number(num) > max)
            max = num;
    }

    let average = total / array.length;
    let result = "max:" + max + " min:" + min + " average:" + average.toFixed(2); //rounds decimal numbers to 2 digits after comma
    return result.toString();
}



//! 3subtask
ArrayProcessingTool.subSumSelection = function subSumSelection(array) {
    var max_so_far = Number.NEGATIVE_INFINITY;
    var leftIndex = 0,
        rightIndex = array.length - 1,
        len = array.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;
            for (var k = i; k <= j; k++) {
                if (array[k] < array[k + 1]) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                    maxSum += array[k];


                } else { i = j + 1; }
            }
        }
    }

    let result = [];
    for (let x = leftIndex; x <= rightIndex; x++) {
        result.push(array[x]);

    }

    return "возраст-я послед-ть макс. длины: " + result.toString();
};