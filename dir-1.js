const fs=require("fs");

if(fs.existsSync("./test")){
    console.log("folder already exists");
}else{
    fs.mkdir("./test",(err)=>{
        if(err){
            console.log(err);
        }

        console.log("folder created");
    });
}