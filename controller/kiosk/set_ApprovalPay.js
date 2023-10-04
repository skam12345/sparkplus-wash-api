const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertpaymentapp = require('../../query/set_approvalpay/insert_paymentapp');
const selectwpdseqno = require('../../query/set_approvalpay/select_wpdseqno');

module.exports.setapprovalpay = (req, res) =>{
    let carno = req.body.car_no;
    var wpd_seq_no = '';
    let tr_no = req.body.tr_no;
    let trd_date= req.body.trd_date;
    let trd_time= req.body.trd_time;
    let pay_fee= req.body.pay_fee;
    let auth_no = req.body.auth_no;
    let token = req.body.token;
    console.log('setapp'+req.body);
    connection.query(selectwpdseqno(carno), (error, rows) => {
        if (error) throw error;
        wpd_seq_no = rows[0].wpd_seq_no;
        connection.query(insertpaymentapp(wpd_seq_no, tr_no, trd_date, trd_time, pay_fee, carno, auth_no, token), 
        (error, rows) => {
            if (error) throw error;
            if(rows.affectedRows > 0){
                res.send('{"result_code" : "Y"}');
            }else{
                res.send('{"result_code" : "N"}');
            }     
        })
    })
}
