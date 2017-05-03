var constant = 32; //global variable
function celsiusToFarenheit(temperature) {
  var multiplier = 9;
  var divisor = 5;
  var farenheitTemp = temperature * multiplier / divisor + constant;
  return farenheitTemp;
}
var z = multiplier;
output.innerHTML = celsiusToFarenheit(100);


//braces in yava script do not create a scope
var x = 15;
if (x < 20) {
  var y = x;
}

var z = y; //OK
output.innerHTML = z;


//nested functions
function hypotenuse()
{
  var side1 = 3;
  var side2 = 4;
}

function squareSide1()
{
  return side1 * side1;
}

function squareSide2()
{
  return side2 * side2;
}

return Math.sqrt(squareSide1() + squareSide2());
}
