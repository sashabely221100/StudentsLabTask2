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

ArrayProcessingTool.getMaxSubSum = function getMaxSubSum(array) {


  let maximumSum = 0;
  let tempSum = 0;

  for (let curNuumber of array) {
    tempSum += curNuumber;
    maximumSum = Math.max(maximumSum, tempSum); 
    if (tempSum < 0) tempSum = 0;
  }

  return maximumSum;

  //! o(n^2)
    // let maximumSum = 0
    // for (let index = 0; index < array.length; index++) {
    //     let startSum = 0;
    //     for (let j = index; j < array.length; j++) {
    //         startSum += array[j];
    //         maximumSum = Math.max(maximumSum, startSum);
    //     }
    // }
    // return maximumSum;
};
    
console.log( ArrayProcessingTool.getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( ArrayProcessingTool.getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( ArrayProcessingTool.getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( ArrayProcessingTool.getMaxSubSum([1, 2, 3]) ); // 6
console.log( ArrayProcessingTool.getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
