// EventEmitter is a Node.js mechanism that implements event-driven communication, allowing an object to emit named events and execute registered callback functions (listeners) when those events occur.

// EventEmitter is a Class
const EventEmitter = require("events");
// emitter is a Object
const emitter = new EventEmitter();

// Register a listener
// emitter.addListener("message", () => {
emitter.on("message", (e) => {
    console.log("Event Called!")
    setTimeout(()=>{
        console.log(e)
    }, 3000)
})

// Raise an event
emitter.emit("message", { id: 101, userName: "ARSamir"})