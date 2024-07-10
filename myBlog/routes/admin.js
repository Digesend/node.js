const express=require("express");
const router = express.Router();
const adminLayout = "../views/layouts/admin";
const adminLayout2 = "../views/layouts/admin-nologout";
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

        if(username === "admin" && password === "admin"){
            res.send("Success");
        }else{
            res.send("Fail");
        }
    })
);

router.get(
    "/register",asyncHandler(async(req,res)=>{
        res.render("admin/index",{layout:adminLayout2});
    })
);

router.post(
    "/register",asyncHandler(async(req,res)=>{
        res.send("Register");
    })
);

module.exports=router;