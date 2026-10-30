export const pi = 3.1416;

function addition(a,b){
    return a+b;
}

export function subtraction(a,b){
    if(a>b){
        return a - b;
    }
    else{
        return b - a;
    }
}

export default addition;