require("dotenv").config(); // .env에 있는 변수 가져오기
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;  // .env에 PORT가 없으면 3000번 포트 사용

// DB 연결
connectDb();

// 레이아웃과 뷰 엔진 설정
app.use(expressLayouts);
app.set("view engine","ejs");
app.set("views","./views");

// 정적 파일
app.use(express.static("public"));

app.use("/",require("./routes/main"));

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});