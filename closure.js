//Let's define a closure 'createNextId'.

//Create a function that creates and returns a closure.
function idGeneratorFunc() {
    let seed = 0;   //seed for our Id generator. This exists withint idGeneratorFunc()

    function createNextId() {
        return ++seed;
    }

    return createNextId; //Returns the function, not the variable.
};

var createId = idGeneratorFunc();   //Save the response into a variable.
console.log(createId());    //Prints 1
console.log(createId());    //Prints 2
console.log(createId());    //Prints 3

//Interesting concept is how createId is still able to consume the variable seed. (Read Lexical scoping) 

//The above function can be written as below (execute the function as anonymous and save the result directly.)
var idGeneratorVar = function () {
    let seed = 0;   //seed for our Id generator

    function createNextId() {
        return ++seed;
    }

    return createNextId;
}();    // The paranthesis here is executing the function and saving the response (the return value of this anonymous function) in createId variable.

//The above one is close to module pattern. 
///Which means idGeneratorVar is a module with it's own private vars.

//Revealing module pattern with slightly extended generator
var idGeneratorVar = function () {
    let seed = 0;   //seed for our Id generator

    function nextId() { //Increment seed for next id
        return ++seed;
    }
    
    function prevId(){  //Return previos id, but doesn't update seed.
    return seed-1;
    }

    return {
        getNextId: nextId,
        getPrevId: prevId
    }
}();

console.log(idGeneratorVar.getNextId());    //Prints 1
console.log(idGeneratorVar.getNextId());    //Prints 2
console.log(idGeneratorVar.getNextId());    //Prints 3
console.log(idGeneratorVar.getPrevId());    //Prints 2
console.log(idGeneratorVar.getNextId());    //Prints 4