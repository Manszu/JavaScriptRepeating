//When a function calls itself
function func1(num, exp) {
    if (exp === 0)
    {
      return 1;
    }
    return num * func1(num, exp-1);
}

//non recursive- iterative form
function nonRecursiveFunc(num,exp){
    var retVal=1;
    for ( var i =0; i<exp ; i++)
    {
      retval *= num;
    }

    return retVal;
}

var answer = func1(2,10);
output.innerHTML = answer;
