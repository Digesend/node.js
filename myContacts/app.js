const express=require("express");
const dbConnect = require('./config/dbConnect');

const app=express();
app.set("view engine","ejs");   //ejs 엔진을 사용할 것이라고 알려준다.
app.set("views","./views");
const port=3000;

// load public files
app.use(express.static("./public"));

/*app.get("/",(req,res)=>{
    res.status(200).send("Hello Node!");
});*/

// 모든 연락처 가져오기
/*app.get("/contacts",(req,res)=>{
    res.status(200).send("Contacts Page");
});

// 새 연락처 추가하기
app.post("/contacts",(req,res)=>{
    res.status(201).send("create contacts");
});

// 연락처 상세보기
app.get("/contacts/:id",(req,res)=>{
    res.status(200).send(`View Contact for ID:${req.params.id}`);
});

// 연락처 수정하기
app.put("/contacts/:id",(req,res)=>{
    res.status(200).send(`Update Contact for ID:${req.params.id}`);
});

// 연락처 삭제하기
app.delete("/contacts/:id",(req,res)=>{
    res.status(200).send(`Delete Contact for ID:${req.params.id}`);
});*/

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/contacts",require("./routes/contactRoutes"));

app.get("/test",(req,res,next)=>{
    const error=new Error("테스트용 에러");
    error.status=401;
    next(error);
});

//app.use(errorhandler);

app.listen(port,()=>{
    console.log(`${port}번 포트에서 서버 실행 중`);
});