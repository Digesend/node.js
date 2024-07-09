const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");

router.get(["/","/home"],(req,res)=>{
    const locals={
        title:"Home",
    }
    // index.ejs를 렌더링하는데 mainLayout 레이아웃으로 감싸기
    res.render("index",{locals,layout:mainLayout});
});

router.get("/about",(req,res)=>{
    //  about.ejs를 렌더링하는데 mainLayout 레이아웃으로 감싸기
    res.render("about",{layout:mainLayout});
});

module.exports=router;

Post.insertMany([
    {
        title:"제목1",
        body:"내용1-불쌍한 내 인생",
    },
    {
        title:"제목2",
        body:"내용2-우리가 누구냐고 물으신다면",
    },
    {
        title:"제목3",
        body:"내용3-대답해드리는게 인지상정",
    },
    {
        title:"제목4",
        body:"내용4-나 로이",
    },
    {
        title:"제목5",
        body:"내용5-나 로사",
    },
]);