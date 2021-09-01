//! TODO добавить обработку случаев с некорректной датой


let DateDisplayFormatter = new Object();
let monthCheck;
let fromNow = false;
let dateInput;
let dateInputButton;
let output2;

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

monthCheck = document.getElementById('monthCheck');
fromNow = document.querySelector("#fromNow");
dateInput = document.querySelector(".date-input");
dateInputButton = document.querySelector(".subtask2__button");
dateInputButton.addEventListener("click", dateClick);
output2 = document.querySelector(".task2-result");

function dateClick() {
    output2.value = DateDisplayFormatter.showCurrentDate(dateInput.value);
}






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
    let none = document.getElementById("none");
    let inputRadio1 = document.getElementById("ddmmyyyy");
    let inputRadio2 = document.getElementById("mmddyyyy");
    let inputRadio3 = document.getElementById("yyyyddmm");
    let inputRadio4 = document.getElementById("yyyymmdd");

    let none2 = document.getElementById("none2");
    let outputRadio1Checked = document.getElementById("ddmmyyyy2").checked;
    let outputRadio2Checked = document.getElementById("mmddyyyy2").checked;
    let outputRadio3Checked = document.getElementById("yyyyddmm2").checked;
    let outputRadio4Checked = document.getElementById("yyyymmdd2").checked;
    // let ddmmyyyyFlag = false;
    // let mmddyyyyFlag = false;
    // let yyyyddmmFlag = false;
    // let yyyymmddFlag = false;
    let day, month, year;
    // let inputMaskString = "";
    // let outputMaskString = "";
    let date = dateStr;
    //let dateStrArr;


    // function findParams(dateStr) {

    //     if (dateStr.includes(',')) {
    //         dateStrArr = dateStr.split(',');
    //         date = dateStrArr[0].trim();
    //         inputMaskString = dateStrArr[1].trim();
    //         if (dateStrArr.length > 2)
    //             outputMaskString = dateStrArr[2];
    //     }
    // }

    //findSeparator(outputMaskString);

    //findParams(dateStr);
    date = date.replace(/\D/ig, ''); //  \D  all non-digit characters between 1 and unlimited times

    // let ddmmyyyy = "ddmmyyyy";
    // let mmddyyyy = "mmddyyyy";
    // let yyyyddmm = "yyyyddmm";
    // let yyyymmdd = "yyyymmdd";




    //! после разбиения параметров инпута на массив переписать код ниже date[0].
    function formatInput(date) {
        if (inputRadio1.checked) {

            day = date.slice(0, 2);
            month = date.slice(2, 4);
            year = date.slice(4, 8);
            //  ddmmyyyyFlag = true;


        } else if (inputRadio2.checked) {

            month = date.slice(0, 2);
            day = date.slice(2, 4);
            year = date.slice(4, 8);
            //  mmddyyyyFlag = true;

        } else if (inputRadio3.checked) {
            year = date.slice(0, 4);
            day = date.slice(4, 6);
            month = date.slice(6, 8);
            //   yyyyddmmFlag = true;
        } else if (inputRadio4.checked) {
            year = date.slice(0, 4);
            month = date.slice(4, 6);
            day = date.slice(6, 8);
            //  yyyymmddFlag = true;
        } else {
            day = date.slice(0, 2);
            month = date.slice(2, 4);
            year = date.slice(4, 8);
        }
    }

    formatInput(date);

    function validateDate(date) {

        isValid = true;


        if ((parseInt(date)) === NaN) {
            isValid = false;
            alert("попробуйте снова");
            dateInput.value = "";


        } else if ((parseInt(day) > 31) || (parseInt(day) <= 0)) {
            isValid = false;
            alert("Неверно введён день, попробуйте снова");
            dateInput.value = "";

        } else if ((parseInt(month) > 12) || (parseInt(month) <= 0)) {
            isValid = false;
            alert("Неверно введён месяц, попробуйте снова");
            dateInput.value = "";
        } else if ((parseInt(year) > 2021) || (parseInt(year) <= 0)) {
            isValid = false;
            alert("неверно введён год, попробуйте снова");
            dateInput.value = "";

        }


    }

    validateDate(dateStr);

    monthCheck.checked ? month = String(months[Number(month) - 1]) : month;
    // if (outputMaskString != "") {
    //     outputMaskString = outputMaskString.replace(/[^\w]+/g, ''); //  \D  all non-digit characters between 1 and unlimited times

    // }
    let resultStr = "";


    function getDatefromNow(str) {
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let date = new Date(Date.parse(year, month, day));
        let diff = Math.floor((today - date) / 1000 / 3600 / 24 / 365) // floor в нижнюю сторону
        diff.toString();
        return str + " — полных лет прошло с этой даты: " + diff;
    }
    // if (isvalid) {

    //     outputMaskString.toLowerCase() == "ddmmyyyy" ? resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}` :
    //         outputMaskString.toLowerCase() == "mmddyyyy" ? resultStr = `${month}` + `${separator}` + `${day}` + `${separator}` + `${year}` :
    //         outputMaskString.toLowerCase() == "yyyyddmm" ? resultStr = `${year}` + `${separator}` + `${day}` + `${separator}` + `${month}` :
    //         outputMaskString.toLowerCase() == "yyyymmdd" ? resultStr = `${year}` + `${separator}` + `${month}` + `${separator}` + `${day}` :
    //         "";
    if (isvalid) {

        outputRadio1Checked ? resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}` :
            outputRadio2Checked == true ? resultStr = `${month}` + `${separator}` + `${day}` + `${separator}` + `${year}` :
            outputRadio3Checked == true ? resultStr = `${year}` + `${separator}` + `${day}` + `${separator}` + `${month}` :
            outputRadio4Checked == true ? resultStr = `${year}` + `${separator}` + `${month}` + `${separator}` + `${day}` : "";

    } else
    if (none2.checked) {
        resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}`

    }
    if (fromNow.checked) {
        return getDatefromNow(resultStr);

    } else {
        return resultStr;
    }
}