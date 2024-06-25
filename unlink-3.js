const fs=require("fs");

if(!fs.existsSync("./text-2.txt")){
    console.log("file does not exist");
}else{
    fs.unlink("./text-2.txt",()=>{
        console.log("file deleted");
    });
}