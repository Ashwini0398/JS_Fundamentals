//The scope chain is used to resolve the value of variable names in javascript
//scope chain in javascript is lexically defiend, which means that we can see what the scope chain will be by looking at the code
// AT the top of the scope chain is the global scope, which is the window object in the  browser

//LEXICAL SCOPING: a function that is lexically within another function  get access to the scope of the outer function(Inner function can get access to their parent functions variables But the vice versa is not true.)


var a = "hello ...."; //global scope

function first(){          //parent funtion
    var b = "How are you?....";
    second();
  
     function second(){   //innerfunction(child function)    
         var c ="I m fyn thank you";
         console.log(a+b+c);
         three();
     }
}

function three()
{
    var d ="What is your name?";
    console(a+d);
}

first();