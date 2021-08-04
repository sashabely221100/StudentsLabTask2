//! 1___________________________________________________









let ArrayProcessingTool = new Object();
let subSum;
let search;
let selection;
let input;
let inputButton;
window.onload = function() {

    function btnClick() {
        //input.value = stringToArray(input.value);
        if (subSum.checked) {
            input.value = ArrayProcessingTool.getMaxSubSumOn(stringToArray(input.value));
        } else if (search.checked) {
            input.value = ArrayProcessingTool.Search(stringToArray(input.value));
        } else if (selection.checked) {
            input.value = ArrayProcessingTool.subSumSelection(stringToArray(input.value));
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




//! 2___________________________________________________


//! TODO добавить обработку случаев с некорректной датой


let DateDisplayFormatter = new Object();
let monthCheck;
let fromNow = false;
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
    function dateClick() {
        dateInput.value = DateDisplayFormatter.showCurrentDate(dateInput.value);
    }
    monthCheck = document.getElementById('monthCheck');
    fromNow = document.querySelector("#fromNow");
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
    let outputMaskString = "";
    let date = dateStr;
    let dateStrArr;


    function findParams(dateStr) {

        if (dateStr.includes(',')) {
            dateStrArr = dateStr.split(',');
            date = dateStrArr[0].trim();
            inputMaskString = dateStrArr[1].trim();
            if (dateStrArr.length > 2)
                outputMaskString = dateStrArr[2];

        }


    }
    findSeparator(outputMaskString);

    findParams(dateStr);


    // let ddmmyyyy = "ddmmyyyy";
    // let mmddyyyy = "mmddyyyy";
    // let yyyyddmm = "yyyyddmm";
    // let yyyymmdd = "yyyymmdd";


    date = date.replace(/\D/ig, ''); //  \D  all non-digit characters between 1 and unlimited times

    //! после разбиения параметров инпута на массив переписать код ниже date[0].
    function formatInput(inputMask) {
        if (inputMask.toLowerCase() === "ddmmyyyy") {

            day = date.slice(0, 2);
            month = date.slice(2, 4);
            year = date.slice(4, 8);
            ddmmyyyyFlag = true;


        } else if (inputMask.toLowerCase() === "mmddyyyy") {

            month = date.slice(0, 2);
            day = date.slice(2, 4);
            year = date.slice(4, 8);
            mmddyyyyFlag = true;

        } else if (inputMask.toLowerCase() === "yyyyddmm") {
            year = date.slice(0, 4);
            day = date.slice(4, 6);
            month = date.slice(6, 8);
            yyyyddmmFlag = true;
        } else if (inputMask.toLowerCase() === "yyyymmdd") {
            year = date.slice(0, 4);
            month = date.slice(4, 6);
            day = date.slice(6, 8);
            yyyymmddFlag = true;
        } else if (inputMask.length < 2) {
            day = date.slice(0, 2);
            month = date.slice(2, 4);
            year = date.slice(4, 8);
        }
    }

    formatInput(inputMaskString);

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
    if (outputMaskString != "") {
        outputMaskString = outputMaskString.replace(/[^\w]+/g, ''); //  \D  all non-digit characters between 1 and unlimited times

    }
    let resultStr = "";


    function getDatefromNow(str) {
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let date = new Date(Date.parse(year, month, day));
        let diff = Math.floor((today - date) / 1000 / 3600 / 24 / 365) // floor в нижнюю сторону
        diff.toString();
        return str + " — полных лет прошло с этой даты: " + diff;
    }
    if (isvalid && inputMaskString.length > 2 && outputMaskString.length > 2) {

        outputMaskString.toLowerCase() == "ddmmyyyy" ? resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}` :
            outputMaskString.toLowerCase() == "mmddyyyy" ? resultStr = `${month}` + `${separator}` + `${day}` + `${separator}` + `${year}` :
            outputMaskString.toLowerCase() == "yyyyddmm" ? resultStr = `${year}` + `${separator}` + `${day}` + `${separator}` + `${month}` :
            outputMaskString.toLowerCase() == "yyyymmdd" ? resultStr = `${year}` + `${separator}` + `${month}` + `${separator}` + `${day}` :
            "";
    } else if (isvalid && inputMaskString.length > 2) {

        ddmmyyyyFlag == true ? resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}` :
            mmddyyyyFlag == true ? resultStr = `${month}` + `${separator}` + `${day}` + `${separator}` + `${year}` :
            yyyyddmmFlag == true ? resultStr = `${year}` + `${separator}` + `${day}` + `${separator}` + `${month}` :
            yyyymmddFlag == true ? resultStr = `${year}` + `${separator}` + `${month}` + `${separator}` + `${day}` : "";

    } else if (separator != "") {
        resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}`;

    } else {
        resultStr = `${day}` + `${separator}` + `${month}` + `${separator}` + `${year}`;

    }
    if (fromNow.checked) {
        return getDatefromNow(resultStr);

    } else return resultStr;


}









































//! 6___________________________________________________














let BinaryConverter = new Object();
let converterInput;
let inputVal;
let converterButton;
let inputArr;
let selectOutput = "";
let selectInput = "bin";




window.onload = function() {

    converterButton = document.getElementById("subTask3__button"); // btn elem
    converterInput = document.getElementById("converterInput"); //input elem


    selectInput = document.querySelector(".selectInput"); // input-select element
    selectInput.addEventListener('change', (e) => {
        selectInput = e.target.value;
        return selectInput;
    });


    selectOutput = document.querySelector(".selectOutput"); // output-select element
    selectOutput.addEventListener('change', (e) => {
        selectOutput = e.target.value;
        return selectOutput;
    });


    converterInput.value = converterButton.addEventListener("click", converterInputClick);

    function converterInputClick() {
        // inputVal = converterInput.value; //!inputVALUE
        // inputVal.replace(/\D/g, "");
        // inputArr = inputVal.trim().split('');
        return BinaryConverter.Convert(converterInput.value, selectInput, selectOutput);
    }
}








function binToDec(src) {

    var i;
    var n = 0;
    var srcString = src.toString();
    var returnNum = 0;

    for (i = srcString.length - 1; i >= 0; i--) {
        returnNum += srcString[i] * 2 ** n;
        n++;
    }

    return returnNum;

}

function binToHex(src) {
    var mapping = {
        "0000": "0",
        "0001": "1",
        "0010": "2",
        "0011": "3",
        "0100": "4",
        "0101": "5",
        "0110": "6",
        "0111": "7",
        "1000": "8",
        "1001": "9",
        "1010": "A",
        "1011": "B",
        "1100": "C",
        "1101": "D",
        "1110": "E",
        "1111": "F"
    };

    let srcString = src.toString();
    let resultStr = "";
    let remainder = ""; //ostatok


    for (var i = srcString.length; i >= 4; i -= 4) {
        if (i - 4 < srcString.length) {
            resultStr += mapping[srcString.substr(i - 4, 4)];
        }
    }


    if (i !== 0) {
        remainder = srcString.substr(0, i);

        while (remainder.length < 4) {
            remainder += "0";
        }

        resultStr = mapping[remainder] + resultStr;
    }

    return resultStr;

}

function decToBin(src) {
    var n = 0;
    var resultStr = "";

    while (2 ** (n) < src) {
        n++;
    }

    for (n; n >= 0; n--) {
        if (2 ** n <= src) {
            resultStr += "1";
            src = src % 2 ** n;
        } else {
            resultStr += resultStr === "" ? "" : "0";
        }
    }

    return resultStr;

}

function decToHex(src) {

    var mapping = {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "A",
        "11": "B",
        "12": "C",
        "13": "D",
        "14": "E",
        "15": "F"
    };

    let k = 0;
    var resultStr = "";

    while (16 ** (k + 1) < src) {
        k++;
    }

    for (k; k >= 0; k--) {
        if (16 ** k <= src) {
            resultStr += mapping[Math.floor(src / 16 ** k).toString()];
            src = src - Math.floor(src / 16 ** k) * (16 ** k);
        } else {
            resultStr += "0";
        }
    }

    return resultStr;
}

function hexToBin(src) {

    var mapping = {
        "0": "0000",
        "1": "0001",
        "2": "0010",
        "3": "0011",
        "4": "0100",
        "5": "0101",
        "6": "0110",
        "7": "0111",
        "8": "1000",
        "9": "1001",
        "A": "1010",
        "B": "1011",
        "C": "1100",
        "D": "1101",
        "E": "1110",
        "F": "1111"
    };

    var srcString = src.toString();
    var resultStr = "";

    for (let l = 0; l < srcString.length; l++) {
        resultStr += mapping[srcString[l]];
    }

    return resultStr;

}

function hexToDec(src) {

    var mapping = {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "A": "10",
        "B": "11",
        "C": "12",
        "D": "13",
        "E": "14",
        "F": "15"
    };

    var srcString = src.toString();
    var returnNum = 0;


    for (let m = 0; m < srcString.length; m++) {
        returnNum += mapping[srcString[m]] * (16 ** (srcString.length - 1 - m));
    }

    return returnNum;

}


BinaryConverter.Convert = function Convert(src, from, to) {

    switch (from) {

        case "bin":
            converterInput.value = to === "dec" ? binToDec(src) : binToHex(src);
            break;

        case "dec":
            converterInput.value = to === "bin" ? decToBin(src) : decToHex(src);
            break;
        case "hex":
            converterInput.value = to === "dec" ? hexToDec(src) : hexToBin(src);
            break;

    }

}