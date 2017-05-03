//naming a function
function add (x,y)
{
  var z = x + y;
  return z;
}

var sum = add(5,7);
alert(sum);

//anonymous function
var add = function (x,y)
{
  var z = x + y;
  return z;
}

var sum = add(5,7);
alert(sum);

//y is undefined if too few parameters
var sum = add(5);
alert(sum);

//extra parameters -ignored
var sum = add(5,6,7,8);
alert(sum);

//innerHTML property
output.innerHTML=sum;

//hoisting- we can call add even before it is defined
