/*In JavaScript, functions are first-class objects, meaning they can be:
stored in variables, passed as parameters, returned from other functions. */
function scope() {

    if (true) {
        var d = "var";
        let e = "let"
    }

    console.log(d); // can be access
    //console.log(e); //Out of scope
}
scope();



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



let arrowOneParaFunction = a => {
    console.log("Arrow Function " + a);
}
arrowOneParaFunction("With One Parameter");



let arrowOneLineFunction = a => "Arrow Function " + a;
console.log(arrowOneLineFunction("In One Line"));



let arrowOneLineFunctionWithTwoPara = (a,b) => "Arrow Function " + a + b;
console.log(arrowOneLineFunctionWithTwoPara("In One Line", " with Two Parametters"));