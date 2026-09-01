/*In JavaScript, functions are first-class objects, meaning they can be:
stored in variables, passed as parameters, returned from other functions. */
function test() {

    if (true) {
        var d = "var";
        let e = "let"
    }

    console.log(d); // can be access
    //console.log(e); //Out of scope
}
test();

function normalFunction(){
    console.log("Normal Function");
}
normalFunction();


function returnFunction(){
    return "Return Function";
}
console.log(returnFunction());


function defaultParameterFunction(x = "Default"){
    console.log(x + " Parameter Function");
}
defaultParameterFunction();


let anonymousFunction = function(){
    console.log("Anonymous Function");
}
anonymousFunction();

    
let arrowFunction = () => {
    console.log("Arrow Function");
}
arrowFunction();

let arrowOneParaFunction = p => {
    console.log("Arrow Function " + p);
}
arrowOneParaFunction("With One Parameter");


let arrowOneLineFunction = l => "Arrow Function " + l;
console.log(arrowOneLineFunction("In One Line"));