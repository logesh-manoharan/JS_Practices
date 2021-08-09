// 'async' keyword allows we to use the 'await'
const fs = require("fs");

const func1 = async() => {
    try {
        var data = await fs.promises.readFile('./AsynchronousJS/Callback_Functions/test.txt', {
            encoding: 'utf-8'
        })
        console.log("Data: " + data);
    } catch (err) {
        console.log("Error: " + err);
    }
}

func1();