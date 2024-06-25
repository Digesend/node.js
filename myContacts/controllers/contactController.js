const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts // 함수 설명
//@route GET /contacts  //요청 방식과 URL

const getAllContacts = asyncHandler(async (req,res)=>{
    try{
        const contacts=await Contact.find();
        const users=[
            {name:"John",email:"john@aaa.bbb",phone:"123456789"},
            {name:"An",email:"miri@naver.com",phone:"65413155"},
        ];
        res.render("getAll",{heading:"User Lit", users:users});   // views 폴더에 있는 getAll.ejs 파일 렌더링
    }catch(error){
        res.send(error.message);
    }
});

/*const getAllContacts = asyncHandler(async (req,res)=>{
    try{
        const contacts=await Contact.find();
        res.status(200).send(contacts);
    }catch(error){
        res.send(error.message);
    }
});*/

//@desc Create a contacts // 함수 설명
//@route POST /contacts  //요청 방식과 URL
const createContact = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {name,email,phone}=req.body;
    if(!name||!email||!phone){
        return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).send("Create Contacts");
});

const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    res.status(200).send(contact);
});

const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).send(`Update Contact for ID:${req.params.id}`);
});

const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).send(`Delete Contact for ID:${req.params.id}`);
});

module.exports={getAllContacts, createContact,getContact,updateContact,deleteContact};