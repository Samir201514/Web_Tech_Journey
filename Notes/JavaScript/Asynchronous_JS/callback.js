// A callback is a function that is passed as an argument to another function so that it can be executed later.
// function means passing the function itself.
// function() means executing the function immediately and passing its return value
// Callback Hell is a situation in JavaScript where multiple callback functions are nested inside one another, making the code difficult to read, understand, debug, and maintain. 
// It is also known as the Pyramid of Doom because of its pyramid-like code structure.

function getData(id, callback){
    setTimeout(() => {
        console.log(`User : ${id}`)
        if(callback){
            callback()
        }
    }, 3000)
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5, () => {
                    getData(6)
                });
            });
        });
    });
});