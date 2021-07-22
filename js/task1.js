//  task description

// . Array Processing Tool
// a. Sub Sum
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача — найти непрерывный подмассив arr, сумма элементов которого 
// максимальна. Функция должна возвращать только эту сумму.
// Например:
// 1. getMaxSubSum([-1, 2, 3, -9]) = 5
// 2. getMaxSubSum([2, -1, 2, 3, -9]) = 6
// 3. getMaxSubSum([-1, 2, 3, -9, 11]) = 11 
// 4. getMaxSubSum([-2, -1, 1, 2]) = 3
// 5. getMaxSubSum([100, -9, 2, -3, 5]) = 100
// 6. getMaxSubSum([1, 2, 3]) = 6
// 7. getMaxSubSum([-1, -2, -3]) = 0
// Написать два решения, сложность O(n2
// ) и O(n).
// b. Search
// Написать функционал поиска минимального, максимального, медианного 
// значения в массиве.
// c. Selection Task
// Написать функционал поиска возрастающей последовательности 
// максимальной длины в исходном массиве.
// Например: 1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1
// Все функции обернуть в один объект для обработки массивов.
ArrayProcessingTool = new Object();





let inputButton = document.querySelector('.subtask__button');
let input = document.querySelector('.subtask__input');


function stringToArray(arr) {
    let arrayFromString = arr.split(",");
    // console.log(arrayFromString);
    for (let index = 0; index < arrayFromString.length; index++) {
        arr.push(Number.parseInt(arrayFromString[index]));
    }
}



inputButton.onclick = function() {


    let arr = [];

    if (typeof input.value === "string") {

        stringToArray(input.value);
    }


    // console.log(arr);


    let subSum = document.getElementById('check1');
    let search = document.getElementById('check2');
    let selection = document.getElementById('check3');


    debugger;
    if (subSum.checked) {
        input.value = ArrayProcessingTool.getMaxSubSumOn(arr);
    } else if (search.checked) {
        input.value = ArrayProcessingTool.Search(arr);
    } else if (selection.checked) {
        input.value = ArrayProcessingTool.Selection(arr);
    }




};














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
    let result = "max:" + max + " min:" + min + " average:" + average.toFixed(2); //math round 2 avoid big decimals
    return result.toString();
}



//! 3subtask
ArrayProcessingTool.Selection = function Selection(array) {

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

    return "massiv max podposledv-ti: " + result.toString();




};

// var array = [1, 2, 3, -1, 4, 5, 6];

// console.log(findMaxSubArrayBruteForce(array));