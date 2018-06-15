//IIFE - Immediately Invoked Function Expression

if (typeof (console) != 'undefined') console.clear;

//Create a function and call it
function sayHello() {
    var greeting = 'Hello';
    console.log(greeting, 'user');
}
sayHello();


//Let's make  the function more configurable
function sayHelloTo(name) {
    var greeting = 'Hello';
    console.log(greeting, name);
}
sayHelloTo('user');


//Let's create IIFE, so that we don't have to call the function to execute immediately
// Check the comments 1 and 2 for more information
(   // 1. These paranthesis evaluates everything inside it as an valid expression
    function () {   //Anonymous, so function name is optional
        function sayHelloTo(name) {
            var greeting = 'Hello';
            console.log(greeting, name);
        }
        sayHelloTo('user');
    }
)();    // 2. The open close paranthesis invokes the expression.


//Slightly different way of creating an IIFE
(
    function () {   //Anonymous, so function name is optional
        function sayHelloTo(name) {
            var greeting = 'Hello';
            console.log(greeting, name);
        }
        sayHelloTo('user');
    }
());    //Placing paranthesis inside evaluates the function


//Create a function
function myFunc(){};    //Yay, created.
//Execute it immediately
function myFunc(){ console.log('I am created.')}();    //Err.. syntax error.
//Let's negate the undefined
!function myFunc(){ console.log('I am created.')}();    //Success, as it doesnt error out.

//Some more way's...
new function(){ console.log('I am executed!'); }();
;(function(){ console.log('I am executed!'); })();
!function(){ console.log('I am executed!'); }();
~function(){ console.log('I am executed!'); }();
void function(){ console.log('I am executed!'); }();
+function(){ console.log('I am executed!'); }();
-function(){ console.log('I am executed!'); }();
//So, () having precedence over other symbols makes it function expression and executes immediately.
//Refer to some minified files to see syntax like these.