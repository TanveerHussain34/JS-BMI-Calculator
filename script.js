"use strict";

function calculateBmi() {
  var weight = document.bmiForm.realWeight.value;
  var height = document.bmiForm.realHeight.value / 100;
  if (!weight || !height) {
    alert("Please fill in the form.");
    return;
  }
  var realbmi = weight / Math.pow(height, 2);
  var realbmiOutput = document.getElementById("yourbmi");
  var messageOutput = document.getElementById("evaluationMessage");
  var roundedBmi = realbmi.toFixed(1);
  messageOutput.innerHTML = "";
  realbmiOutput.innerHTML =
    "<strong>Your BMI: </strong> " + roundedBmi + "kg/m<sup>2</sup>";
  if (roundedBmi < 18.5) {
    messageOutput.innerHTML = "YOU'RE UNDERWEIGHT!";
  } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    messageOutput.innerHTML = "YOU'RE HEALTHY WEIGHT.";
  } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
    messageOutput.innerHTML = "YOU'RE OVERWEIGHT!";
  } else if (roundedBmi >= 30 && roundedBmi <= 39.9) {
    messageOutput.innerHTML = "YOU'RE OBESE!!";
  } else {
    messageOutput.innerHTML = "YOU'RE SEVERELY OBESE!!!";
  }
}
