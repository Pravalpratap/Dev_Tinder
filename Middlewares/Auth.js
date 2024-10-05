const adminauth=(req,res,next)=>{
    console.log("Admin auth is getting checked");
    const Token="XYZ";
    const isAdminauthorised= Token ==="XYZ"
    if(!isAdminauthorised){
        res.status(401).send("unauthorised request")
    } else{
        next();
    }
}


const userauth=(req,res,next)=>{
    console.log("user auth is getting checked");
    const Token="XYZ";
    const isAdminauthorised= Token ==="XYZ"
    if(!isAdminauthorised){
        res.status(401).send("unauthorised request")
    } else{
        next();
    }
}

module.exports={
    adminauth,userauth
}