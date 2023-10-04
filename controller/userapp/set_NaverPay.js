const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertmempayinfo = require('../../query/userapp/set_regcard/insert_mempayinfo');
const updatepayinfo = require('../../query/userapp/set_updatecard/update_payinfo');

module.exports.naverpay = (req, res) =>{
    console.log(req.body);
    let querystring = require('querystring');
    let request = require('request');
    if(req.body.res_cd == '0000'){ // 승인
        const query = querystring.stringify({
            "type" : "naver",
            "pgCno" : req.body.cno,
            "certNo" : req.body.cert_no,
            "amount" : req.body.product_amt,
            "payCode" : req.body.pay_cd,
            "cardCd" : req.body.card_cd,
            "installmentMonth" : req.body.install_period,
            "freeInstallmentTypeCode" : req.body.noint,
            "cardNo" : req.body.card_no
        });
        res.redirect("http://localhost/PayOnetimeSelectMethod?"+query);
    }
    else{
        console.log("naverpay 승인오류");
    }

}   