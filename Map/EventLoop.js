console.log("Start");

setTimeout(() => {
  console.log("Callback");
}); // It show same output eith and without giving time

Promise.resolve().then(() => {
  console.log("Inside promise then");
});

console.log("End");

/*
Order of execution

Start
End
Inside promise then
Callback

*/

//? Event loop is a fundamental concept in asynchronous programming, allowing languages like JavaScript (which is single-threaded) to perform non-blocking operations. It enables the execution of code, the collection and processing of events, and the execution of queued sub-tasks. This concept is pivotal in environments like web browsers and Node.js, where handling I/O operations efficiently without freezing the main thread is crucial.

// Key Components of the Event Loop
// Call Stack: Where the JavaScript engine keeps track of what functions are currently running. It follows LIFO (Last In, First Out) principle.
// Callback Queue: When asynchronous operations complete, their callbacks are placed in this queue waiting to be executed.
// Event Loop: Its job is to check the call stack and determine if the call stack is empty. If the call stack is empty, it will take the first event from the callback queue and push it onto the call stack to be executed.
