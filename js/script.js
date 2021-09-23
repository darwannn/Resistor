let boxFirstBand = document.querySelector(".boxFirstBand");
let firstBandSelector = document.querySelector("#firstBandSelector");
let firstBand = document.querySelector(".firstBand");
let resistance = document.querySelector(".resistance");
let boxSecondBand = document.querySelector(".boxSecondBand");
let secondBandSelector = document.querySelector("#secondBandSelector");
let secondBand = document.querySelector(".secondBand");
let boxThirdBand = document.querySelector(".boxThirdBand");
let thirdBandSelector = document.querySelector("#thirdBandSelector");
let thirdBand = document.querySelector(".thirdBand");
let boxFourthBand = document.querySelector(".boxFourthBand");
let fourthBandSelector = document.querySelector("#fourthBandSelector");
let fourthBand = document.querySelector(".fourthBand");
let boxFifthBand = document.querySelector(".boxFifthBand");
let fifthBandSelector = document.querySelector("#fifthBandSelector");
let fifthBand = document.querySelector(".fifthBand");
let boxSixthBand = document.querySelector(".boxSixthBand");
let sixthBandSelector = document.querySelector("#sixthBandSelector");
let sixthBand = document.querySelector(".sixthBand");
let minimum = document.querySelector(".minimum");
let maximum = document.querySelector(".maximum");
let hiddenFirstBand = document.querySelector(".hiddenFirstBand");
let hiddenSecondBand = document.querySelector(".hiddenSecondBand");
let hiddenThirdBand = document.querySelector(".hiddenThirdBand");
let hiddenFourthBand = document.querySelector(".hiddenFourthBand");
let hiddenFifthBand = document.querySelector(".hiddenFifthBand");
let hiddenSixthBand = document.querySelector(".hiddenSixthBand");
let resultInput = document.querySelectorAll(".resultInput");
let selector = document.querySelectorAll("select");
let bandResetColor = document.querySelectorAll("section");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let digit, tolerance, toleranceDecimal, multiplier, multiplierText, toleranceTotal, resistanceMultiplied,
    maximumResistance, minimumResistance, temperatureCoefficientText, abbreviation, toleranceText;

removeResult();

firstBandSelector.addEventListener('change', function () {
    onChangeSelectorEvent(hiddenFirstBand, firstBandSelector);
    colorBackground(boxFirstBand, firstBandSelector, firstBand);
    onChange();
});

secondBandSelector.addEventListener('change', function () {
    onChangeSelectorEvent(hiddenSecondBand, secondBandSelector);
    colorBackground(boxSecondBand, secondBandSelector, secondBand);
    onChange();
});

thirdBandSelector.addEventListener('change', function () {
    onChangeSelectorEvent(hiddenThirdBand, thirdBandSelector);
    colorBackground(boxThirdBand, thirdBandSelector, thirdBand);
    onChange();
});

fourthBandSelector.addEventListener('change', function () {
    onChangeSelectorEvent(hiddenFourthBand, fourthBandSelector);
    colorBackground(boxFourthBand, fourthBandSelector, fourthBand);
    conversion();
    fourthBandSelector.options[1].setAttribute("label", multiplierText);
    onChange();
});

fifthBandSelector.addEventListener('change', function () {
    onChangeSelectorEvent(hiddenFifthBand, fifthBandSelector);
    colorBackground(boxFifthBand, fifthBandSelector, fifthBand);
    conversion();
    fifthBandSelector.options[1].setAttribute("label", toleranceText);
    onChange();
});

sixthBandSelector.addEventListener('change', function (e) {
    onChangeSelectorEvent(hiddenSixthBand, sixthBandSelector);
    colorBackground(boxSixthBand, sixthBandSelector, sixthBand);
    conversion();
    sixthBandSelector.options[1].setAttribute("label", temperatureCoefficientText);
    onChange();
});

document.querySelector("#clear").addEventListener("click", function () {

    removeResult();
    for (let i = 0; i < selector.length; i++) {
        selector[i].style.backgroundColor = "white";
        selector[i].style.color = "black";
        selector[i].style.borderColor = "#AFAFAF";
        selector[i].selectedIndex = 0;

    }
    for (let i = 0; i < bandResetColor.length; i++) {
        bandResetColor[i].style.backgroundColor = "white";
    }
    sixthBandSelector.selectedIndex = 0;
    temperatureCoefficientText = "NaN";
});

function removeResult() {
    resistance.innerHTML = "";
    minimum.innerHTML = "";
    maximum.innerHTML = "";
    resistance.style.display = "none";
    minimum.style.display = "none";
    maximum.style.display = "none";
    for (let i = 0; i < resultInput.length; i++) {
        resultInput[i].classList.remove("resultInputToggle");
    }
}

function onChange() {
    if (four.checked) {
        if (firstBandSelector.value != "-" && secondBandSelector.value != "-" && fourthBandSelector.value !=
            "-" &&
            fifthBandSelector.value != "-") {
            for (let i = 0; i < resultInput.length; i++) {
                resultInput[i].classList.add("resultInputToggle");
            }
            calculate();
        }
    } else if (five.checked) {
        if (firstBandSelector.value != "-" && secondBandSelector.value != "-" && thirdBandSelector.value !=
            "-" &&
            fourthBandSelector.value != "-" && fifthBandSelector.value != "-") {
            for (let i = 0; i < resultInput.length; i++) {
                resultInput[i].classList.add("resultInputToggle");
            }
            calculate();
        }
    } else if (six.checked) {
        if (firstBandSelector.value != "-" && secondBandSelector.value != "-" && thirdBandSelector.value !=
            "-" &&
            fourthBandSelector.value != "-" && fifthBandSelector.value != "-" && sixthBandSelector.value != "-"
            ) {
            for (let i = 0; i < resultInput.length; i++) {
                resultInput[i].classList.add("resultInputToggle");
            }
            calculate();
        }
    }
}

four.addEventListener("click", function () {
    onChangeStyle("none", "none", "none", "none", "none", "none", "#B31B1B", "white", "white", "white",
        "black", "black");
    calculate();
});

five.addEventListener("click", function () {
    onChangeStyle("block", "block", "block", "none", "none", "none", "white", "#B31B1B", "white",
        "black", "white", "black");
    fifthBandSelector.classList.remove("sixFifthBandSelector");
    fifthBand.classList.remove("sixFifthBand");
    boxFifthBand.classList.remove("sixBoxFifthBand");
    fifthBandSelector.classList.add("fiveFifthBandSelector");
    fifthBand.classList.add("fiveFifthBand");
    boxFifthBand.classList.add("fiveBoxFifthBand");
    calculate();
});

six.addEventListener("click", function () {
    onChangeStyle("block", "block", "block", "block", "block", "block", "white", "white", "#B31B1B",
        "black", "black", "white");
    fifthBandSelector.classList.remove("fiveFifthBandSelector");
    fifthBand.classList.remove("fiveFifthBand");
    boxFifthBand.classList.remove("fiveBoxFifthBand");
    fifthBandSelector.classList.add("sixFifthBandSelector");
    fifthBand.classList.add("sixFifthBand");
    boxFifthBand.classList.add("sixBoxFifthBand");
    calculate();
});

function calculate() {
    let color = sixthBandSelector.options[sixthBandSelector.selectedIndex].text;
    if (four.checked)
        digit = parseInt(firstBandSelector.options[firstBandSelector.selectedIndex].text + secondBandSelector
            .options[firstBandSelector.selectedIndex].text);
    if (five.checked)
        digit = parseInt(firstBandSelector.options[firstBandSelector.selectedIndex].text + secondBandSelector
            .options[firstBandSelector.selectedIndex].text + thirdBandSelector.options[thirdBandSelector
                .selectedIndex].text);
    if (six.checked)
        digit = parseInt(firstBandSelector.options[firstBandSelector.selectedIndex].text + secondBandSelector
            .options[firstBandSelector.selectedIndex].text + thirdBandSelector.options[thirdBandSelector
                .selectedIndex].text);

    conversion();
    resistanceMultiplied = digit * multiplier;
    toleranceTotal = resistanceMultiplied * toleranceDecimal;
    maximumResistance = resistanceMultiplied + toleranceTotal;
    minimumResistance = resistanceMultiplied - toleranceTotal;
    let checkNan = isNaN(resistanceMultiplied);
    let checkNull = temperatureCoefficientText == null;

    resistance.style.display = "block";
    minimum.style.display = "block";
    maximum.style.display = "block";

    if (four.checked || five.checked) {
        if (checkNan == false) {
            resistance.innerHTML = `${decimalAbbreviation(resistanceMultiplied.toFixed(2), 2).toString()} <span class="symbol">Ω ±</span>  
        ${tolerance.toString()} <span class="symbol">%</span>`;
            minimum.innerHTML =
                `${decimalAbbreviation(minimumResistance.toFixed(2), 2).toString()} <span class="symbol">Ω</span>`;
            maximum.innerHTML =
                `${decimalAbbreviation(maximumResistance.toFixed(2), 2).toString()} <span class="symbol">Ω</span>`;
        }
    } else {
        if (checkNan == false && checkNull == false &&  temperatureCoefficientText != "NaN") {
            resistance.innerHTML = `${decimalAbbreviation(resistanceMultiplied.toFixed(2), 2).toString()} <span class="symbol">Ω ±</span>
        ${tolerance.toString()}<span class="symbol">%</span> <br>${temperatureCoefficientText}`;
            minimum.innerHTML =
                `${decimalAbbreviation(minimumResistance.toFixed(2), 2).toString()} <span class="symbol">Ω</span>`;
            maximum.innerHTML =
                `${decimalAbbreviation(maximumResistance.toFixed(2), 2).toString()} <span class="symbol">Ω</span>`;
        }
    }
}

function conversion() {
    if (fourthBandSelector.value == "Black") {
        multiplier = 1;
        multiplierText = `x1 Ω`;
    }
    if (fourthBandSelector.value == "Brown") {
        multiplier = 10;
        multiplierText = `x10 Ω`;
    }
    if (fourthBandSelector.value == "Red") {
        multiplier = 100;
        multiplierText = `x100 Ω`;
    }
    if (fourthBandSelector.value == "Orange") {
        multiplier = 1000;
        multiplierText = `x1 KΩ`;
    }
    if (fourthBandSelector.value == "Yellow") {
        multiplier = 10000;
        multiplierText = `x10 KΩ`;
    }
    if (fourthBandSelector.value == "Green") {
        multiplier = 100000;
        multiplierText = `x100 KΩ`;
    }
    if (fourthBandSelector.value == "Blue") {
        multiplier = 1000000;
        multiplierText = `x1 MΩ`;
    }
    if (fourthBandSelector.value == "Violet") {
        multiplier = 10000000;
        multiplierText = `x10 MΩ`;
    }
    if (fourthBandSelector.value == "Grey") {
        multiplier = 100000000;
        multiplierText = `x100 MΩ`;
    }
    if (fourthBandSelector.value == "White") {
        multiplier = 100000000;
        multiplierText = `x1 GΩ`;
    }

    if (fourthBandSelector.value == "Gold") {
        multiplier = .1;
        multiplierText = `x.1 Ω`;
    }
    if (fourthBandSelector.value == "Silver") {
        multiplier = .01;
        multiplierText = `x.01 Ω`;
    }

    if (fifthBandSelector.value == "Brown") {
        tolerance = 1;
        toleranceDecimal = .01;
        toleranceText = `± 1%`;
    }
    if (fifthBandSelector.value == "Red") {
        toleranceDecimal = .02;
        tolerance = 2;
        toleranceText = `± 2%`;
    }
    if (fifthBandSelector.value == "Green") {
        toleranceDecimal = .005;
        tolerance = .5;
        toleranceText = `± .5%`;
    }
    if (fifthBandSelector.value == "Blue") {
        toleranceDecimal = .0025;
        tolerance = .25;
        toleranceText = `± .25%`;
    }
    if (fifthBandSelector.value == "Violet") {
        tolerance = .10;
        toleranceDecimal = .0010;
        toleranceText = `± .1%`;
    }
    if (fifthBandSelector.value == "Grey") {
        tolerance = .05;
        toleranceDecimal = .0005;
        toleranceText = `± .05%`;
    }
    if (fifthBandSelector.value == "Gold") {
        tolerance = 5;
        toleranceDecimal = .05;
        toleranceText = `± 5%`;
    }
    if (fifthBandSelector.value == "Silver") {
        tolerance = 10;
        toleranceDecimal = .10;
        toleranceText = `± 10%`;
    }

    if (sixthBandSelector.value == "Brown") {
        temperatureCoefficientText = `100 PPM`;
    }
    if (sixthBandSelector.value == "Red") {
        temperatureCoefficientText = `50 PPM`;
    }
    if (sixthBandSelector.value == "Orange") {
        temperatureCoefficientText = `15 PPM`;
    }
    if (sixthBandSelector.value == "Yellow") {
        temperatureCoefficientText = `25 PPM`;
    }
    if (sixthBandSelector.value == "Blue") {
        temperatureCoefficientText = `10 PPM`;
    }
    if (sixthBandSelector.value == "Violet") {
        temperatureCoefficientText = `5 PPM`;
    }
}

function colorText(textColor, textIndex) {
    if (textIndex.text == 0 || textIndex.text == 1 || textIndex.text == 2 || textIndex.text == 5 || textIndex
        .text == 6 || textIndex.text == 8) {
        textColor.style.color = "white";
    } else {
        textColor.style.color = "black";
    }
}

function colorBackground(boxBand, bandSelector, band) {
    let color = bandSelector.options[bandSelector.selectedIndex].value;
    boxBand.style.backgroundColor = color;
    bandSelector.style.backgroundColor = color;
    band.style.backgroundColor = color;
    bandSelector.style.borderColor = color;
}

function onChangeStyle(oneDisplay, twoDisplay, threeDisplay, fourDisplay, fiveDisplay, sixDisplay,
    fourBackground, fiveBackground, sixBackground, fourText, fiveText, sixText) {
    thirdBandSelector.style.display = oneDisplay;
    thirdBand.style.display = twoDisplay;
    boxThirdBand.style.display = threeDisplay;
    sixthBandSelector.style.display = fourDisplay;
    sixthBand.style.display = fiveDisplay;
    boxSixthBand.style.display = sixDisplay;

    document.querySelector("#labelFour").style.backgroundColor = fourBackground;
    document.querySelector("#labelFive").style.backgroundColor = fiveBackground;
    document.querySelector("#labelSix").style.backgroundColor = sixBackground;
    document.querySelector("#labelFour").style.color = fourText;
    document.querySelector("#labelFive").style.color = fiveText;
    document.querySelector("#labelSix").style.color = sixText;
}

function onChangeSelectorEvent(hiddenThisBand, thisBandSelector) {
    hiddenThisBand.text = thisBandSelector.options[thisBandSelector.selectedIndex].value;
    hiddenThisBand.value = thisBandSelector.options[thisBandSelector.selectedIndex].text;
    thisBandSelector.selectedIndex = 1;
    colorText(thisBandSelector, thisBandSelector.options[thisBandSelector.selectedIndex]);
}

function decimalAbbreviation(functionInput, decimal) {
    decimal = Math.pow(10, decimal);
    abbreviation = ["K", "M", "G", "T"];
    for (let i = abbreviation.length - 1; i >= 0; i--) {
        let size = Math.pow(10, (i + 1) * 3);
        if (size <= functionInput) {
            functionInput = Math.round(functionInput * decimal / size) / decimal;
            functionInput += abbreviation[i];
            break;
        }
    }
    return functionInput;
}
