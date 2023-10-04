const request = require('request');

const getmembershipwash = require('../../biztalk_data/get_membershipwash');


module.exports.getmembershipwash = (req, res) =>{
    let car_no = req.body.car_no;
    let get_date = req.body.get_date;
    let pay_product = req.body.pay_product;
    let option_product = req.body.option_product;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let total_pay = req.body.total_pay;
    let approval_no = req.body.approval_no;
    let phone_no = req.body.phone_no;
    // 테스트용
    // let car_no = '10가10101';
    // let get_date = '10가10101';
    // let pay_product =  '10가10101';
    // let option_product =  '10가10101';
    // let start_date =  '10가10101';
    // let end_date =  '10가10101';
    // let total_pay = '10가10101';
    // let approval_no =  '10가10101';
    // let phone_no = '01073345785';
    let data = getmembershipwash(car_no, get_date, pay_product, option_product, start_date, end_date,  total_pay, approval_no);
   
    var token;
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
            "msgIdx":car_no+approval_no+phone_no,
            "countryCode":"82",
            "resMethod":"PUSH",
            "senderKey":"a54e05f52d5402b3472b097e8b017b46d5f6a278",
            "tmpltCode":"getmembershipwash",
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