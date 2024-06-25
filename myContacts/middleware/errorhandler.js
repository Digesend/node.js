const errorhandler = (err,req,res,next)=>{
    const status=err.status||500;   //상태 코드가 있다면 상태 코드 값 사용, 아니면 500사용
    switch(status){
        case 400:
            res.status(status).json({
                title:"Bad Request",
                message:err.message
            });
            break;
        case 401:
            res.status(status).json({
                title:"Unauthorized",
                message:err.message
            });
            break;
        case 403:
            res.status(status).json({
                title:"Forbidden",
                message:err.message
            });
            break;
        case 404:
            res.status(status).json({
                title:"Not Found",
                message:err.message
            });
            break;
        case 403:
            res.status(status).json({
                title:"Internal Server Error",
                message:err.message
            });
            break;
        default:
            res.status(status).json({
                title:"No Error!"
            });
            break;
    }
}

module.exports=errorhandler