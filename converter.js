let dark = document.getElementById("dark");
let light = document.getElementById("light");
let celsius = document.getElementById("Celsius");
let fahrenheit = document.getElementById("Fahrenheit");
let kelvin = document.getElementById("Kelvin");

// THEME BUTTONS
dark.addEventListener("click", function() {
    document.body.style.backgroundColor = "#202020";
    document.getElementById("h1").style.color = "#5cdbd3";
    document.getElementById("p").style.color = "#5cdbd3";
    document.getElementById("theme").style.color = "#5cdbd3";
});

light.addEventListener("click", function() {
    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementById("h1").style.color = "#800000";
    document.getElementById("p").style.color = "#800000";
    document.getElementById("theme").style.color = "#800000";
});

// TEMPERATURE CONVERTER

celsius.addEventListener("input", function() {
    let tempCelsius = parseFloat(this.value); // Parse input as a floating-point number
    if (!isNaN(tempCelsius)) {
        let resultFahrenheit = (tempCelsius * 9) / 5 + 32;
        let resultKelvin = tempCelsius + 273.15; // Conversion to Kelvin
        fahrenheit.value = `${resultFahrenheit.toFixed(2)}° F`; // Rounded to 2 decimal places
        kelvin.value = `${resultKelvin.toFixed(2)} K`; // Rounded to 2 decimal places
    } else {
        fahrenheit.value = null;
        kelvin.value = null;
        alert("Enter a number");
    }
});

fahrenheit.addEventListener("input", function() {
    let tempFahrenheit = parseFloat(this.value); // Parse input as a floating-point number
    if (!isNaN(tempFahrenheit)) {
        let resultCelsius = ((tempFahrenheit - 32) * 5) / 9;
        let resultKelvin = ((tempFahrenheit - 32) * 5) / 9 + 273.15; // Conversion to Kelvin
        celsius.value = `${resultCelsius.toFixed(2)}° C`; // Rounded to 2 decimal places
        kelvin.value = `${resultKelvin.toFixed(2)} K`; // Rounded to 2 decimal places
    } else {
        celsius.value = null;
        kelvin.value = null;
        alert("Enter a number");
    }
});

kelvin.addEventListener("input", function() {
    let tempKelvin = parseFloat(this.value); // Parse input as a floating-point number
    if (!isNaN(tempKelvin)) {
        let resultCelsius = tempKelvin - 273.15;
        let resultFahrenheit = (tempKelvin - 273.15) * (9 / 5) + 32;
        celsius.value = `${resultCelsius.toFixed(2)}° C`; // Rounded to 2 decimal places
        fahrenheit.value = `${resultFahrenheit.toFixed(2)}° F`; // Rounded to 2 decimal places
    } else {
        celsius.value = null;
        fahrenheit.value = null;
        alert("Enter a number");
    }
});