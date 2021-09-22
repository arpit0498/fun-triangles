var inputSide = document.querySelectorAll(".input-text");
var calculateButton = document.querySelector(".calculate-button");
var output = document.querySelector("#output");

function handleClick() {
  var side1 = Number(inputSide[0].value);
  var side2 = Number(inputSide[1].value);
  // var side3 = Number(inputSide[2].value);
  // var p = (side1 + side2 + side3) / 2;
  // var area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  var area = .5 * side1 * side2;
  output.innerText = "The area of triangle is " + area;
}
calculateButton.addEventListener("click", handleClick);