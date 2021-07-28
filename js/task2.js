
//! TODO добавить обработку случаев с некорректной датой


let DateDisplayFormatter = new Object();
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


window.onload = function () {
    function dateClick() {
        dateInput.value = DateDisplayFormatter.showCurrentDate(dateInput.value);
    }
    monthCheck = document.getElementById('monthCheck');
    dateInput = document.querySelector(".date-input");

    dateInputButton = document.querySelector(".subtask2__button");
    dateInputButton.addEventListener("click", dateClick);

};








DateDisplayFormatter.showCurrentDate = function showCurrentDate(dateStr) {

    let separator = " ";
    separator = findSeparator(dateStr);

    function findSeparator(datestr) {
        if (datestr.includes('-')) {
            separator = '-';
        } else if (datestr.includes('/')) {
            separator = '/';
        } else if (datestr.includes('_')) {
            separator = "_";
        }
        return separator;
    }


    let isvalid = true;
    let ddmmyyyyFlag = false;
    let mmddyyyyFlag = false;
    let yyyyddmmFlag = false;
    let yyyymmddFlag = false;
    let day, month, year;
    let inputMaskString = "";
    let date = dateStr;
    let dateStrArr;


    function findParams(dateStr) {

        if (dateStr.includes(',')) {
            dateStrArr = dateStr.split(',');
            date = dateStrArr[0].trim();
            inputMaskString = dateStrArr[1].trim();

        }


    }

    findParams(dateStr);

    const ddmmyyyy = "ddmmyyyy";
    const mmddyyyy = "mmddyyyy";
    const yyyyddmm = "yyyyddmm";
    const yyyymmdd = "yyyymmdd";


    date = date.replace(/\D/ig, ''); //  \D  all non-digit characters between 1 and unlimited times

    //! после разбиения параметров инпута на массив переписать код ниже date[0].
    if (inputMaskString.toLowerCase() === ddmmyyyy) {

        day = date.slice(0, 2);
        month = date.slice(2, 4);
        year = date.slice(4, 8);
        ddmmyyyyFlag = true;


    } else if (inputMaskString.toLowerCase() === mmddyyyy) {

        month = date.slice(0, 2);
        day = date.slice(2, 4);
        year = date.slice(4, 8);
        mmddyyyyFlag = true;

    } else if (inputMaskString.toLowerCase() === yyyyddmm) {
        year = date.slice(0, 4);
        day = date.slice(4, 6);
        month = date.slice(6, 8);
        yyyyddmmFlag = true;
    } else if (inputMaskString.toLowerCase() === yyyymmdd) {
        year = date.slice(0, 4);
        month = date.slice(4, 6);
        day = date.slice(6, 8);
        yyyymmddFlag = true;
    } else if (inputMaskString.length < 2) {
        day = date.slice(0, 2);
        month = date.slice(2, 4);
        year = date.slice(4, 8);
    }

    function validateDate(date) {

        isValid = true;


        if ((parseInt(date)) === NaN) {
            isValid = false;
            alert("попробуйте снова");
            dateInput.value = "";


        }
        else if ((parseInt(day) > 31) || (parseInt(day) <= 0)) {
            isValid = false;
            alert("Неверно введён день, попробуйте снова");
            dateInput.value = "";

        }
        else if ((parseInt(month) > 12) || (parseInt(month) <= 0)) {
            isValid = false;
            alert("Неверно введён месяц, попробуйте снова");
            dateInput.value = "";
        }
        else if ((parseInt(year) > 2021) || (parseInt(year) <= 0)) {
            isValid = false;
            alert("неверно введён год, попробуйте снова");
            dateInput.value = "";

        }


    }

    validateDate(dateStr);

    monthCheck.checked ? month = String(months[Number(month) - 1]) : month;

    let resultStr = "";
    if (isvalid && inputMaskString.length > 2) {

        ddmmyyyyFlag == true ? resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}`
            : mmddyyyyFlag == true ? resultStr = `${month}` + `${separator}` + `${day}` + `${separator}` + `${year}`
                : yyyyddmmFlag == true ? resultStr = `${year}` + `${separator}` + `${day}` + `${separator}` + `${month}`
                    : yyyymmddFlag == true ? resultStr = `${year}` + `${separator}` + `${month}` + `${separator}` + `${day}` : "";

    } else if (separator != "") { resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}`; }
    else {
        resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}`;
    }
    return resultStr;


}