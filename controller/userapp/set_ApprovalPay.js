const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertpaymentapp = require('../../query/userapp/set_approvalpay/insert_paymentapp');

module.exports.setapprovalpay = (req, res) =>{
    let mem_no = req.body.mem_no;
    var pay_seq_no = req.body.pay_seq_no;
    let tr_no = req.body.tr_no;
    let trd_date= req.body.trd_date;
    let trd_time= req.body.trd_time;
    let pay_fee= req.body.pay_fee;
    let auth_no = req.body.auth_no;
    let token = req.body.token;
    connection.query(insertpaymentapp(pay_seq_no, tr_no, trd_date, trd_time, pay_fee, mem_no, auth_no, token), 
        (error, rows) => {
            if (error) throw error;
            if(rows.affectedRows > 0){
                res.send('{"result_code" : "Y"}');
            }else{
                res.send('{"result_code" : "N"}');
            }     
        })
        connection.end;

}
