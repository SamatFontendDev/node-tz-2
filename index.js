const express = require('express');
const app = express();

const intervalArg = process.argv[2];
const timeOutArg = process.argv[3];

const myFunc = (interval, timeOut) => {
    app.get('*', function(req, res) {
        const timeOutput = setInterval(() => {
            let date = new Date(); 
            let now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
            date.getUTCHours(), date.getUTCMinutes());
            console.log(now_utc);
        }, interval);
        setTimeout(() => { 
            clearInterval(timeOutput);
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let dateNum = date.getDate();
            let hours = date.getHours()
            let minutes = date.getMinutes();
    
            res.send(
                `<div>
                    <p>Дата: ${dateNum}.${month}.${year}</p>
                    <p>Время: ${hours}.${minutes}</p>
                </div>`
            );
        }, timeOut);
    });
} 

myFunc(intervalArg, timeOutArg);

app.listen(3000, function () {
    console.log('Серевер запущен!');
});
