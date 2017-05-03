var string1= "lala";
var string2= "lala2 'dsa'";
var string3= "lala \"lazy\" lala \n";
var string4= string1 +string2;

var myArray= string4.split(" ");
alert(myArray);

//Regular expression
var myString = "Krzysztof M4n5zu Mansz programista React";
myString.search(/quick/);


var myString2= "my zip is 01720-1234 what is yours?";
var offSet = myString.search(/\b[0-9]{5}(?:-[0-9]{4})?\b/);
