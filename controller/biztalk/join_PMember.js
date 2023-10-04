const request = require('request');

const sendpmember = require('../../biztalk_data/send_Pmember');


module.exports.joinpmember = (req, res) =>{
    let car_no = req.body.car_no;
    let phone_no = req.body.phone_no;
    let reg_date = req.body.reg_date;
    let data = sendpmember(car_no, phone_no, reg_date);
   
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
            "msgIdx":reg_date+car_no+phone_no,
            "countryCode":"82",
            "resMethod":"PUSH",
            "senderKey":"a54e05f52d5402b3472b097e8b017b46d5f6a278",
            "tmpltCode":"joinpmember",
            "message": data,
            "recipient": phone_no,
            "attach":{
            "button":[{"name":"스파크플러스 바로가기","type":"WL", "url_mobile":"https://app.sparkpluswash.com",
            "url_pc" : "https://app.sparkpluswash.com"}]},
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