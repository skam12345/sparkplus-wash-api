const request = require('request');

const chkbefore7days = require('../../biztalk_data/chk_before7days');

module.exports.chkbeforesevendays = (req, res) =>{
    let car_no = req.body.car_no;
    let membership_end_date = req.body.membership_end_date;
    let get_date = req.body.get_date;
    let pay_product = req.body.pay_product;
    let option_product = req.body.option_product;
    let update_date = req.body.update_date;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let membership_pay = req.body.membership_pay;
    let phone_no = req.body.phone_no;

    let data = chkbefore7days(car_no, membership_end_date , get_date, pay_product, option_product, update_date , start_date, end_date, membership_pay);
   
    let token
    let jsonData = {bsid : 'moonsong_1', passwd : '66bb3ae17994de9fc99b93178f94b573cedc3e5b'};
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
            "msgIdx":car_no+membership_end_date+phone_no,
            "countryCode":"82",
            "resMethod":"PUSH",
            "senderKey":"a54e05f52d5402b3472b097e8b017b46d5f6a278",
            "tmpltCode":"before7Days",
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