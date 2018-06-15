//Let's pass some global variables to IIFE

var theMsg = 'the secret';

(function (msg) {
    let str = 'I know ';
    console.log(str, msg);   //Prints 'I know the secret'
})(theMsg);

//Fine, the console.log had access to the str variable and so printed the string without any issues.


//Let's create a closure which does the same.
function saySomething(msg) {

    let str = 'I know ';

    function sayIt() {
        console.log(str, msg);
    }

    return sayIt;
}

var sayer = saySomething(theMsg);   //'sayit' is assigned to sayer

sayer();    //Prints 'I know the secret'. 
//This is because 'sayIt' assigned to 'sayer' in previous line  has reference to it's parent scope (saySomething's scope) and 
//hence can access the 'I know part of the string'.