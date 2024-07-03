const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts // 함수 설명
//@route GET /contacts  //요청 방식과 URL

const getAllContacts = asyncHandler(async (req,res)=>{
    try{
        const contacts=await Contact.find();
        res.render("index",{contacts:contacts});
    }catch(error){
        res.send(error.message);
    }
});

const addContactForm = (req,res)=>{
    res.render("add");  // view/add.ejs 렌더링
}

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
    res.redirect("/contacts");
});

const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    res.render("update",{contact:contact});
});

const updateContact=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const {name,email,phone} = req.body;
    const updateContact = await Contact.findByIdAndUpdate(
        id,
        {name,email,phone},
        {new:true}
    );
    res.redirect("/contacts");
});

const deleteContact=asyncHandler(async(req,res)=>{
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/contacts");
});

module.exports={getAllContacts, createContact,getContact,updateContact,deleteContact,addContactForm,};