
//array definition
var empty = [];
empty[0] = 1;
empty[1] =2;
//alert(empty);

var primes = [1,2,3,4,5];
var thirdPrime= primes [2];
//alert(thirdPrime);

var myArray = [1, "hello", false];
var myArrayLength = myArray.length;

function range(max){
  var retVal=[];
  for (var i =0; i<max; i++)
  {
    retVal.push(i*2); //retVal[i] = i*2;
  }
  // var last= retVal.pop();
  // alert(last);
  return retVal;
}


var myArray = range(5);
for( var i=-; i <myArray.length; i++)
{
  alert(myArray[i]);
}
