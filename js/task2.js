// function myFunc(requiredArg, optionalArg = 'defaultValue') {
// do stuff
// }

//! TODO добавить обработку случаев с некорректной датой






DateDisplayFormatter = new Object();
let monthCheck;
let dateInput;
let dateInputButton;

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];


window.onload = function() {
    monthCheck = document.getElementById('monthCheck');
    dateInput = document.querySelector(".date-input");

    dateInputButton = document.querySelector(".subtask2__button");
    dateInputButton.addEventListener("click", dateClick);

}


DateDisplayFormatter.showCurrentDate = function showCurrentDate(dateStr, inputFormat = undefined, outputFormat = undefined) {

    //!тут разбиение на разные переменные по запятой 

    dateStr = dateStr.replace(/\D/ig, ''); //  \D  all non-digit characters between 1 and unlimited times

    let day = dateStr.slice(0, 2);
    let month = dateStr.slice(2, 4);
    let year = dateStr.slice(4, 8);



    function validateDate(date) {

        if ((parseInt(date)) === NaN) {

            alert("попробуйте снова");

        }
        if ((parseInt(day) > 31) || (parseInt(day) <= 0)) {

            alert("Неверно введён день, попробуйте снова");
        }
        if ((parseInt(month) > 12) || (parseInt(month) <= 0)) {

            alert("Неверно введён месяц, попробуйте снова");
        }
        if ((parseInt(year) > 2021) || (parseInt(year) <= 0)) {

            alert("неверно введён год, попробуйте снова");
        }


    }

    validateDate(dateStr);

    if (monthCheck.checked) {
        month = String(months[Number(month) - 1]);
    }

    //let currentDate = new Date(); // текущая дата
    let dateString = `${day}-${month}-${year}`;

    return dateString;

};


function dateClick() {
    dateInput.value = DateDisplayFormatter.showCurrentDate(dateInput.value);
}











// let currentDay = currentDate.getDate();
// console.log(currentDay);

// let currentMonth = currentDate.getMonth();
// console.log(currentMonth);

// let currentYear = currentDate.getFullYear();
// console.log(currentYear);