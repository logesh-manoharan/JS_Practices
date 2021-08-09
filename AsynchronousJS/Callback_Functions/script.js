// Callback functions


const fs = require("fs");


// calling the function after some 1 second

setTimeout(() => {
    console.log("Function waited for a one second");
}, 1000);


// nested calling of function

setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
        }, 1000)
    }, 1000)
}, 1000);


// Error Handling by make use of Callbacks

fs.readFile('./AsynchronousJS/Callback_Functions/test.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log("Error occured: " + err);
    } else {
        console.log("Data present in the file: " + data);
    }
});