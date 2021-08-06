let BinaryConverter = new Object();
let converterInput;

let converterButton;

let selectOutput = "";
let selectInput = "";


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


    converterInput.value = BinaryConverter.Convert(converterInput.value, selectInput, selectOutput);
}

BinaryConverter.Convert = function Convert(src, from, to) {
    //2 3 8 10 16

    function getInputRadix(InpRad) {
        return (InpRad === "bin") ? 2 : ((InpRad === "ter") ? 3 : (InpRad === "oct") ? 8 : (InpRad === "dec") ? 10 : (InpRad === "hex") ? 16 : alert("choose Input Radix"));
    }
    let InpRadix = getInputRadix(from);

    function getOutputRadix(OutRad) {
        return (OutRad === "bin") ? 2 : ((OutRad === "ter") ? 3 : (OutRad === "oct") ? 8 : (OutRad === "dec") ? 10 : (OutRad === "hex") ? 16 : alert("choose Input Radix"));
    }
    let OutRad = getOutputRadix(to);



    function convertInputToDecimal(number, InputRadix) {

        return parseInt(number, InputRadix); // converts input to base 10
    }


    let convertedToDecimal = convertInputToDecimal(src, InpRadix); //after converted to decimal we can convert our input num to another base; 

    function toBase(num, OutputRadix) { // only i64 numbers
        var keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        if (!(OutputRadix >= 2 && OutputRadix <= keys.length)) throw new RangeError("toBase() radix argument must be between 2 and " + keys.length)

        if (num < 0) var isNegative = true
        if (isNaN(num = Math.abs(+num))) return NaN

        let output = [];
        do {
            let index = num % OutputRadix;
            output.unshift(keys[index]);
            num = Math.trunc(num / OutputRadix);
        } while (num != 0);
        if (isNegative) output.unshift('-');
        return output.join("");
    }



    return toBase(convertedToDecimal, OutRad);
}