const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpaydetail = require('../../query/userapp/get_paydetail/select_paydetail');

module.exports.getpaydetail = (req, res) =>{
    let pay_seq = req.body.pay_seq;
    connection.query(selectpaydetail(pay_seq), (error, rows)=>{
        if (error) throw error;
        res.send('{"prod_name" : "'+rows[0].prod_name+'" , "option_name" : "'+rows[0].option_name+
        '", "pay_date" : "'+rows[0].pay_date+'", "wash_fee" : "'+rows[0].wash_fee+
        '", "dc_fee" : "'+rows[0].dc_fee+
        '", "pay_fee" : "'+ rows[0].pay_fee +'", "trno" : "'+ rows[0].trno +
        '", "auth_no" : "'+ rows[0].auth_no +'", "pay_type" : "'+ rows[0].pay_type +'" }')
        // res.send('{"prod_name" : "'+rows[0].prod_name+'" , "option_name" : "'+rows[0].option_name+
        // '", "pay_date" : "'+rows[0].pay_date+'", "wash_pay" : "'+rows[0].wash_pay+
        // '", "wash_pay" : "16000", "dc_fee" : "'+rows[0].dc_fee+
        // '", "pay_fee" : "'+ rows[0].pay_fee +'", "trno" : "WH3123131313133", "auth_no" : "WD23203023003", "pay_type" : "'+ rows[0].pay_type +'" }')
    })
    connection.end;

}