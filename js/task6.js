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


    converterButton.addEventListener("click", converterInputClick);




    function converterInputClick() {
        // inputVal = converterInput.value; //!inputVALUE
        // inputVal.replace(/\D/g, "");
        // inputArr = inputVal.trim().split('');
        converterInput.value = BinaryConverter.Convert(converterInput.value, selectInput, selectOutput);
    }





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
            converterInput.value = to === "dec" ? hexToBin(src) : hexToDec(src);
            break;

    }



    function binToDec(src) {
        let input = String(src);
        let binary = String(src)
            .filter(i => i === '1' || i === '0');

        if (input.length !== binary.length) {
            return 'invalid input'
        }
        return binary.reduce((acc, curr, index, arr) => {
            return acc + Number(curr) * Math.pow(2, arr.length - 1 - index);
        }, 0);

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



}