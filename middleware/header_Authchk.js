
module.exports.headerchkauth = (req, res, next) =>{
    console.log(req.headers.auth_key)
    if (req.headers.auth_key == undefined || req.headers.auth_key !='c83b4631-ff58-43b9-8646-024b12193202'){
        res.send('잘못된 접근');    
    }else if(req.headers.auth_key =='c83b4631-ff58-43b9-8646-024b12193202'){
        next();   
    }
}