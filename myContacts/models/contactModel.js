const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
        },
        phone:{
            type:String,
            required:[true,"전화번호는 꼭 기입해 주세요."],
        },
    },
    {
        timestamps:true,    //데이터베이스에 연락처 자료를 추가하거나 수정한 시간이 자동으로 기록됨
    }
);

const Contact=mongoose.model("Contact",contactSchema);
module.exports=Contact;