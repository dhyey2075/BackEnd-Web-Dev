const fs = require("fs");
console.log("starting...");
setTimeout(() => {
    fs.writeFileSync("dhyey.txt","Dhyey is good",()=>{
        console.log("done");
    })
}, 2000);
console.log("Ended");

