// function myFunc(requiredArg, optionalArg = 'defaultValue') {
// do stuff
// }

//! TODO добавить обработку случаев с некорректной датой






DateDisplayFormatter = new Object();
let monthCheck;
let dateInput;
let dateInputButton;

const months = [
    'Januar',
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


DateDisplayFormatter.showCurrentDate = function showCurrentDate(dateStr, format, regexp = undefined) {

    let day = dateStr.slice(0, 2);
    let month = dateStr.slice(2, 4);
    let year = dateStr.slice(4, 8);
    if (monthCheck.checked) {


        month = months[String(month)];

    }




    let currentDate = new Date(); // текущая дата




    let dateString = `${day}-${month}-${year}`;

    return dateString;

}


function dateClick() {
    dateInput.value = DateDisplayFormatter.showCurrentDate(dateInput.value);
}











// let currentDay = currentDate.getDate();
// console.log(currentDay);

// let currentMonth = currentDate.getMonth();
// console.log(currentMonth);

// let currentYear = currentDate.getFullYear();
// console.log(currentYear);