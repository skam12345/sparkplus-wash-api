
module.exports.chkauth = (req, res, next) =>{
    console.log(req.body);
    if (req.body.auth_key == undefined || req.body.auth_key !='c83b4631-ff58-43b9-8646-024b12193202'){
        res.send('잘못된 접근');    
    }else if(req.body.auth_key =='c83b4631-ff58-43b9-8646-024b12193202'){
        next();   
    }
}