
const mynum = document.getElementById("mynum");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const answer = document.getElementById("answer");
let temp;

function convert(){
    if (toFahrenheit.checked){
        temp = Number(mynum.value);
        temp = temp * 9/5 + 32;
        answer.textContent = temp.toFixed(1) + "Fahrenheit";
    }
    else if (toCelsius.checked){
        temp = Number(mynum.value);
        temp = (temp-32) * (5/9);
        answer.textContent = temp.toFixed(1) + "Celsius";
    }
    else{
        answer.textContent = "Select a unit";
    }
}