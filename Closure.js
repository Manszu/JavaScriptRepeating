var scope = "global";

function testScope(){
  var scope= "local";
  function innerFunc() {return scope; }
  return innerFunc;
}

var answer= testScope()(); //return local
output.innerHTML = answer;


//If x were to otherwise go out of scope because of callbacks or other reasons,
// it would be held in scope as long as some function might call it.

var x = 50;
function someFunction() {
  var y = 100;
  return x + y;
}
