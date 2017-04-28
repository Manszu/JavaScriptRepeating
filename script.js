var age = Number(prompt("What is your age?", " "));

var string = "";
do {
  string += "Happy birthday \n";
  age = age - 1;
} while (age > 0)
alert(string);
