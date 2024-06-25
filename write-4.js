const fs = require("fs");

let content=`
==============================
새로운 내용을 추가해 보겠습니다.
==============================
`;  // 따옴표가 아니라 백틱(`)을 사용함

fs.writeFileSync("./example.txt",content,{flag:"a"});