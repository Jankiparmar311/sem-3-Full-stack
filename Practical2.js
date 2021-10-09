const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const os = require("os");

var insructions = () =>{
    console.log("\n0. Exit");
    console.log("\n1. OS CPU architecture");
    console.log("\n2. Free memory of the system");
    console.log("\n3. Total memory of the system");
    console.log("\n4. OS Platform");
    console.log("\n5. Information about current user");
};

var start = () => {
    rl.question("\nEnter your choice: ", (answer) => {
        if(answer === "0"){
            rl.close();
        }
        else if(answer === "1"){
            console.log(os.arch());
            start();
        }
        else if(answer === "2"){
            console.log(os.freemem());
            start();
        }
        else if(answer === "3"){
            console.log(os.totalmem());
            start();
        }
        else if(answer === "4"){
            console.log(os.platform());
            start();
        }
        else if(answer === "5"){
            console.log(os.userInfo());
            start();
        }
    });
};

var repeat = () => {
    insructions();
    start();
};

repeat();