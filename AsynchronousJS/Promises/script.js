// Basic Promise Structure to check the number is 0 or not.

const promise1 = new Promise((resolve, reject) => {
    var a = Math.floor(Math.random() * 101);
    if (a === 0) {
        resolve();
    } else {
        reject(a);
    }
})

promise1.then(() => {
        console.log("Number is 0");
    })
    .catch((a) => {
        console.error("Number is " + a);
    })



// there is some default modules that supports promises
// in below example 'fs' module in Javascript supports PROMISES

const fs = require('fs');

fs.promises.readFile('./AsynchronousJS/Callback_Functions/test.txt', { encoding: 'utf-8' }).then((data) => {
    console.log("Data readed from the file: " + data);
}).catch((err) => {
    console.log("Error occured: " + err);
});