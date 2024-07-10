const express=require("express");
const router = express.Router();
const adminLayout = "../views/layouts/admin";
const adminLayout2 = "../views/layouts/admin-nologout";
const bcrypt = require("bcrypt");
const User=require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const asyncHandler = require("express-async-handler");  // try-catch 대신 사용하기 위해

router.get("/admin",(req,res)=>{
    const locals={
        titile: "관리자 페이지",
    };

    res.render("admin/index",{locals,layout:adminLayout2})
});

router.post(
    "/admin",
    asyncHandler(async(req,res)=>{
        const {username,password} = req.body;

        /*if(username === "admin" && password === "admin"){
            res.send("Success");
        }else{
            res.send("Fail");
        }*/

        // 사용자 이름으로 사용자 찾기
        const user = await User.findOne({username});

        // 일치하는 사용자가 없으면 401 오류 표시
        if(!user){
            return res.status(401).json({message:"일치하는 사용자가 없습니다."});
        }

        // 입력한 비밀번호와 db에 저장된 비밀번호 비교
        const isValidPassword = await bcrypt.compare(password,user.password);
    })
);

router.get(
    "/register",asyncHandler(async(req,res)=>{
        res.render("admin/index",{layout:adminLayout2});
    })
);

/*router.post(
    "/register",
    asyncHandler(async(req,res)=>{
        const hashedPassword = await bcrypt.hash(req.body.password,10); // 비밀번호 암호화
        const user=await User.create({
            username: req.body.username,
            password: hashedPassword,   // 암호화된 비밀번호
        });
        res.json(`user created:${user}`);   // 성공하면 메시지 출력
    })
);*/

module.exports=router;