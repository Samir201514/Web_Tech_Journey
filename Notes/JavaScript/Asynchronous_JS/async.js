// Async = makes a function return a promise
// Await = makes an async function wait for a promise
// Async/Await is JavaScript syntax used to handle asynchronous operations more easily by making Promise-based code look and behave more like synchronous code.

function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            // if(!success){
            if(success){
                resolve(`User : ${id}`)
            }
            else{
                reject("User Id Not Found!")
            }
        }, 1500)
    })
}

// async function getResult() {
//     try{
//         for(let i = 1; i<=6; i++){
//             const result = await getData(i);
//             console.log(result);
//         }
//     }
//     catch(error){
//         console.log(error)
//     }
//     finally{
//         console.log("Task Completed.")
//     }
// }

// getResult()


//IIFE stands for Immediately Invoked Function Expression.
// An IIFE is a JavaScript function that is defined and executed immediately after its creation, without needing to call it separately.
// In simple words: Create a function and execute it immediately.

(async () => {
    try{
        for(let i = 1; i<=6; i++){
            const result = await getData(i);
            console.log(result);
        }
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Task Completed.")
    }
})();