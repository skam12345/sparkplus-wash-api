const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpaytotal = require('../../query/admin/get_paysum/select_paytotal');
const selectpaytotalwithcarno = require('../../query/admin/get_paysum/select_paytotalwithcarno');

module.exports.getpaysum = (req, res) =>{
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let terminal_type = req.body.terminal_type
    let auth_type = req.body.auth_type;
    let buy_type = req.body.buy_type;
    let car_no = req.body.car_no;
    if (terminal_type == undefined){
        terminal_type = '';
    }
    if (auth_type == undefined){
        auth_type = '';
    }
    if (buy_type == undefined){
        buy_type = '';
    }
    if(car_no == undefined){
        connection.query(selectpaytotal(start_date, end_date, terminal_type, auth_type, buy_type), (error, rows) =>{
            if (error) throw error;
            console.log(rows.length);
            res.send('{"amount_fee" : "'+ rows[0].amount_fee +'", "account_fee" : "'+ rows[0].account_fee +'"}');
        })
    }else{
        connection.query(selectpaytotalwithcarno(start_date, end_date, terminal_type, auth_type, buy_type, car_no), (error, rows) =>{
            if (error) throw error;
            res.send('{"amount_fee" : "'+ rows[0].amount_fee +'", "account_fee" : "'+ rows[0].account_fee +'"}');
        })
    }
    connection.end;
}