let BinaryConverter = new Object();
let converterInput;
let inputVal;
let converterButton;
let inputArr;


window.onload = function () {

    converterButton = document.querySelector(".subtask3__button");
    converterInput = document.getElementById("converterInput");


    function converterInputClick() {
        inputVal = converterInput.value;
        inputVal.replace(/\D/g, "");
        inputArr = converterInput.value.trim().split('');
        inputVal = BinaryConverter.Convert(inputArr);
    }



    converterButton.addEventListener("click", converterInputClick);

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
        let i;
        let srcString = src.toString();
        let returnString = "";
        let remainder = ""; //ostatok


        for (i = srcString.length; i >= 4; i -= 4) {
            if (i - 4 < srcString.length) {
                returnString = mapping[srcString.substr(i - 4, 4)] + returnString;
            }
        }


        if (i !== 0) {
            remainder = srcString.substr(0, i);

            while (remainder.length < 4) {
                remainder = "0" + remainder;
            }

            returnString = mapping[remainder] + returnString;
        }

        return returnString;

    }

    function decToBin(src) {
        var n = 0;
        var returnString = "";

        while (2 ** (n) < src) {
            n++;
        }

        for (n; n >= 0; n--) {
            if (2 ** n <= src) {
                returnString += "1";
                src = src % 2 ** n;
            } else {
                returnString += returnString === "" ? "" : "0";
            }
        }

        return returnString;

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
        var returnString = "";

        while (16 ** (k + 1) < src) {
            k++;
        }

        for (k; k >= 0; k--) {
            if (16 ** k <= src) {
                returnString += mapping[Math.floor(src / 16 ** k).toString()];
                src = src - Math.floor(src / 16 ** k) * (16 ** k);
            } else {
                returnString += "0";
            }
        }

        return returnString;
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
        var returnString = "";

        for (let l = 0; l < srcString.length; l++) {
            returnString += mapping[srcString[l]];
        }

        return returnString;

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


    return ();
}