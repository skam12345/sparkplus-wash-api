const request = require('request');

const sendid = require('../../biztalk_data/send_id');

module.exports.send_id = (req, res) =>{
    let mem_id = req.body.mem_id;
    let phone_no = req.body.phone_no;
    let data = sendid(mem_id);
   
    var token
var jsonData = {bsid : 'moonsong_1', passwd : '66bb3ae17994de9fc99b93178f94b573cedc3e5b'};
    request.post({
    headers:{'Content-Type' : 'application/json'},
    url : 'https://www.biztalk-api.com/v2/auth/getToken',
    body:jsonData,
    json:true},
    function(error,response,body){
        token = body.token; 
        request.post({
            headers : {'content-type' : 'application/json', 'bt-token' : token},
            url : 'https://www.biztalk-api.com/v2/kko/sendAlimTalk',
            body : {
            "msgIdx":mem_id+phone_no,
            "countryCode":"82",
            "resMethod":"PUSH",
            "senderKey":"a54e05f52d5402b3472b097e8b017b46d5f6a278",
            "tmpltCode":"sendid",
            "message": data,
            "recipient": phone_no,
            "attach":{
            "button":[{"name":"스파크플러스 바로가기","type":"WL", "url_mobile":"https://app.sparkpluswash.com/",
            "url_pc" : "https://app.sparkpluswash.com/"}]},
        },
            json : true
        }, function(error, response, body){
            if(body.responseCode ==1000){
                res.send('{"result_code" : "Y"}');
            }else{
                res.send('{"result_code" : "N"}');
            }      
        })   
});
    
}