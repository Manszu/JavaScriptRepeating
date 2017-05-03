//Code goes here

var isFemale = false;
var isMale = true;
var isOld = true;
var isOldMan = isMale && isOld;
var isMale != isFemale;
alert(isOldMan);


//Truthyness
alert(0 == false); //TRUE
alert(0 === false); //false


//unary operator
var x = 5;
x++;
alert(x);

//binary operator
var x = 5;
var y = 6;
var z = x + y;
alert(z);

//conditional operator (ternaty operator)
var x = 5;
var y = x < 10 ? x : 10;
