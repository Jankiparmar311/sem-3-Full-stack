const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
const os = require("os");
const http = require("http");

var insructions = () =>{
    console.log("\n0. Exit");
    console.log("\n1. Create Directory");
    console.log("\n2. Remove Directory");
    console.log("\n3. Write File");
    console.log("\n4. Read File");
    console.log("\n5. Delete File");
    console.log("\n6. Append data to file");
    console.log("\n7. Update / Replace file with new data");
    console.log("\n8. Rename File");
};

var createDirectory = () => {
    const path = "./newDir";
    fs.access(path,(error) => {
        if (error){
            fs.mkdir(path,(error) => {
                if(error){
                    console.log(error);
                }
                else
                {
                    console.log("New Directory Created Successfully !!");
                }
            });
        }
        else
        {
            console.log("Given Directory already exists !!");
        }
    });
};

var removeDirectory = () => {
    fs.rmdir("newDir",() => {
        console.log("Directory Removed !!");
    });
};

var writeInFile = () => {
    rl.question("Enter the name of file :",(ans) => {
        filename = ans + ".txt";
        rl.question("Enter the content of the file :",(ans) => {
            content = ans;
            fs.writeFile(filename,content,(err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("File Saved Successfully !!");
                }
                repeat();
            });
        });
    });
};

var ReadFromFile = () => {
    rl.question("Enter the name of file :",(ans) => {
        filename = ans + ".txt";
            fs.readFile(filename,"utf8",function(err,data) {
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
                repeat();
            });
        });
};

var deleteFile = () => {
    rl.question("Enter the name of file which you want to delete:",(ans) => {
        filename = ans + ".txt";
            fs.unlink(filename,function(err) {
                if(err){
                    console.log(err);
                }else{
                    console.log("File Deleted Successfully !!");
                }
                repeat();
            });
        });
};

var appendInFile = () => {
    rl.question("Enter the name of file :",(ans) => {
        filename = ans + ".txt";
        rl.question("Enter the content of the file which you want to append :",(ans) => {
            content = ans;
            fs.appendFile(filename,content,function(err) {
                if(err){
                    console.log(err);
                }else{
                    console.log("Data Appended Successfully !!");
                }
                repeat();
            });
        });
    });
};

var replaceFile = () => {
    rl.question("Enter the name of file :",(ans) => {
        filename = ans + ".txt";
        rl.question("Enter the content of the file :",(ans) => {
            content = ans;
            fs.writeFile(filename,content,function(err) {
                if(err){
                    console.log(err);
                }else{
                    console.log("File Replaced Successfully !!");
                }
                repeat();
            });
        });
    });
};

var renameFile = () => {
    rl.question("Enter the old name of file :",(ans) => {
        old_filename = ans + ".txt";
        rl.question("Enter the new name of the file :",(ans) => {
            new_filename = ans + ".txt";
            fs.rename(old_filename,new_filename,function(err) {
                if(err){
                    console.log(err);
                }else{
                    console.log("File Rename Successfully !!");
                }
                repeat();
            });
        });
    });
};
var start = () => {
    rl.question("\nEnter your choice: ", (answer) => {
        if(answer === "0"){
            rl.close();
        }
        else if(answer === "1"){
            createDirectory();            
            start();
        }
        else if(answer === "2"){
            removeDirectory();
            start();
        }
        else if(answer === "3"){
            writeInFile();
            start();
        }
        else if(answer === "4"){
            ReadFromFile();
            start();
        }
        else if(answer === "5"){
            deleteFile();
            start();
        }
        else if(answer === "6"){
            appendInFile();
            start();
        }
        else if(answer === "7"){
            replaceFile();
            start();
        }
        else if(answer === "8"){
            renameFile();
            start();
        }
    });
};

var repeat = () => {
    insructions();
    start();
};

repeat();