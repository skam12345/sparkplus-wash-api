const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertmempayinfo = require('../../query/userapp/set_regcard/insert_mempayinfo');
const updatepayinfo = require('../../query/userapp/set_updatecard/update_payinfo');

module.exports.cardtask = (req, res) =>{
    let request = require('request');
    let mem_no = req.query.mem_no;
    let flage_id = req.query.code;
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    let data = {
        "mallId": "90909090",
        "shopTransactionId": new Date().getTime(),
        "authorizationId" : req.body.authorizationId,
        "shopOrderNo": req.body.shopOrderNo,
        "approvalReqDate" : year+month+day,
    };
    let card_no;
    let exp_mm = req.body.exp_mm;
    let exp_yy = req.body.exp_yy;
    let cvc_no = req.body.cvc_no;
    let password_no = req.body.password_no;
    let owner;  
    let token;
    request.post({
        headers : {'content-type' : 'application/json'},
        url : 'https://pgapi.easypay.co.kr/api/trades/approval',
        body : data,
        json : true
    }, function(error,response,body){
        console.log(body);
        if(body.resCd == "0000"){
            console.log("상점거래고유번호 : "+body.shopTransactionId);
            console.log("주문번호 : "+body.shopOrderNo);
            console.log("배치키 : "+body.paymentInfo.cardInfo.cardNo);
            card_no = body.paymentInfo.cardInfo.cardmaskno;
            owner = body.paymentInfo.cardInfo.issurName
            token = body.paymentInfo.cardInfo.cardNo;
            console.log("--------------------------------");
            console.log(body);
            if(flage_id == 'Y'){
                connection.query(insertmempayinfo(mem_no, card_no, exp_mm, exp_yy, cvc_no, password_no, owner, token), (error, rows) =>{
                    if (error) throw error;
                    console.log('등록');
                })
            }else if(flage_id == 'N'){
                connection.query(updatepayinfo(card_no, exp_mm, exp_yy,cvc_no, password_no, owner, mem_no, token), (error, rows) =>{
                    if (error) throw error;  
                    console.log('수정');
                })
            }
            res.redirect("https://app.sparkpluswash.com/paymentVue");
        }
        else if(body.resCd == '8001'){
            res.redirect("https://app.sparkpluswash.com/paymentVue");
        }
        else{
            console.log("오류1" + body);
        }
    })
    connection.end;

}   