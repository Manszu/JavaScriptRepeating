var ageAsString = prompt("What is your age ?", " ");
var age = Number(ageAsString);
if (age < 40) {
  alert("Oh so young");
}
alert("Thank you");


//Use braces after if
var ageAsString = prompt("What is your age ?", " ");
var age = Number(ageAsString);
if (age < 40)
  alert("Oh so young");
alert("this is now executed")
alert("Thank you");

//if-else
var ageAsString = prompt("What is your age ?", " ");
var age = Number(ageAsString);
if (age < 40) {
  alert("Oh so young");
} else if (age == 40) {
  alert("you have 40 y/o")
} else {
  alert("over 40 y/o")
}
alert("Thank you"); //otherwise

//while statement
var age = Number(prompt("What is your age ?", " "));

var string = "";
while (age > 0) {
  string += "Happy birthday \n";
  age = age - 1;
}
alert(string);

//do-while -evaluated at least once
var age = Number(prompt("What is your age?", " "));

var string = "";
do {
  string += "Happy birthday \n";
  age = age - 1;
}
alert(string);

//for loop
var age = Number(prompt("What is your age?", " "));
var string = "";
for (var theAge = age; theAge > 0; theAge -= 1) {
  string += "Happy Birthda\n";
}

alert(string);

//break statement
var age = Number(prompt("What is your age?", " "));
var string = "";

for (var counter = 1; counter < age; counter += 1) {
  string += "Happy Birthday\n";
  if (counter % 7 == 0)
    break;
}

alert(string);

//switch statement
var animal = "dog";
switch(animal)
{
  case "cat":
    alert("meow");
    break;
  case "dog":
    alert("woof");
  default:
    alert("unknown animal!");
    break;
}
