// JavaScript provides a better approach to solve callback hell using Promises.
// Promise is a JavaScript object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value.
// Promise can be pending(undefined), fulfilled/resolve(result), rejected(error)

// let promise = new Promise((resolve, reject) => {})

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

getData(1)
    .then((result) => {console.log(result); return getData(2)})
    .then((result) => {console.log(result); return getData(3)})
    .then((result) => {console.log(result); return getData(4)})
    .then((result) => {console.log(result); return getData(5)})
    .then((result) => {console.log(result); return getData(6)})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Task Completed!"))