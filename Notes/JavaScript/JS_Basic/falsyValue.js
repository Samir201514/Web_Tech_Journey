let falsy = [0, "", false, NaN, null, undefined, -0, 0n];

falsy.forEach( (f)=>{
    console.log("Falsy Value : ", f);
})


console.log("Type of NaN : ", typeof(falsy[3]));