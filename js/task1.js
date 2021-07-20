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

//! O(n)
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

//! o(n^2)
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





window.onload = function() {
        let inputButton = document.querySelector('.subtask__button');
        let input = document.querySelector('.subtask__input');
        // присвоить переменной checkbox




        inputButton.onclick = function() {
            // let separator = ",";
            let arrayFromString = input.value.split(separator);
            console.log(arrayFromString);
            for (let index = 0; index < arrayFromString.length; index++) {
                arr.push(Number.parseInt(arrayFromString[index]));
            }
            console.log(arr);

            input.value = ArrayProcessingTool.getMaxSubSumOn(arr);
        };



        ArrayProcessingTool.Search = function Search(inputString) {
            //!переписать под кнопочки radiobutton (+.value)
            //!повесить eventListener на кнопку чтоб слушала состояние radiobutton  
            let arr = inputString.split(",");
            let max = arr[0];
            let min = arr[0];

            for (let num of arr) {
                if (Number(num) < min)
                    min = num
                if (Number(num) > max)
                    max = num;


            }

            return max + " " + min;
        }
        ArrayProcessingTool.Selection = function Selection(array) {};




        console.log(ArrayProcessingTool.Search("-1, 2, 3, -9, 11"));

    }
    //min + max
    // console.log(ArrayProcessingTool.getMaxSubSumOn([-1, 2, 3, -9, 11])); // 11
    // console.log(ArrayProcessingTool.getMaxSubSumOn([-2, -1, 1, 2])); // 3
    // console.log(ArrayProcessingTool.getMaxSubSumOn([1, 2, 3])); // 6
    // console.log(ArrayProcessingTool.getMaxSubSumOn([100, -9, 2, -3, 5])); // 100

// console.log("");
// console.log("");

// console.log(ArrayProcessingTool.getMaxSubSumOn2([-1, 2, 3, -9])); // 5
// console.log(ArrayProcessingTool.getMaxSubSumOn2([-1, 2, 3, -9, 11])); // 11
// console.log(ArrayProcessingTool.getMaxSubSumOn2([-2, -1, 1, 2])); // 3
// console.log(ArrayProcessingTool.getMaxSubSumOn2([1, 2, 3])); // 6
// console.log(ArrayProcessingTool.getMaxSubSumOn2([100, -9, 2, -3, 5])); // 100