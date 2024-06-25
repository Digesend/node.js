const fs = require("fs");

const data=fs.readFileSync("./example.txt","utf8"); //인코딩 지정
console.log(data);