const http = require("http");

const server = http.createServer((req,res)=>{   //서버를 만들고
    console.log(req);
});

server.listen(3000,()=>{    // 서버를 실행하지
    console.log("3000번 포트에서 서버 실행 중");
});