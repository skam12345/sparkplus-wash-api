const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpayseqno = require('../../query/userapp/set_washpay/select_payseqno');
const insertwashpaydata = require('../../query/userapp/set_washpay/insert_washpaydata');

module.exports.setwashpay = (req, res) =>{
    let pay_seq_no = '';
    let use_type = req.body.use_type;
    let mem_no = req.body.mem_no;
    let prod_code = req.body.prod_code;
    let prod_name = req.body.prod_name;
    let option_code = req.body.option_code;
    let option_name = req.body.option_name;
    let is_brush = req.body.is_brush;
    let wash_fee = req.body.wash_fee;
    let dc_fee = req.body.dc_fee;
    let option_fee = req.body.option_fee;
    let pay_fee = req.body.pay_fee;
    let plc_code = req.body.plc_code;
	let pay_type = req.body.pay_type;
    let terminal_type = req.body.terminal_type;

    connection.query(selectpayseqno, (error, rows) =>{
        if (error) throw error;
        pay_seq_no = rows[0].pay_seq_no;
        connection.query(insertwashpaydata(pay_seq_no, use_type, mem_no, prod_code, prod_name,
            option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code,
            pay_type, terminal_type) , (error, rows) =>{
                if (error) throw error;
                if(rows.affectedRows > 0){
                    res.send('{"result_code" : "Y", "pay_seq_no" : "'+pay_seq_no+'"}');
                }else{
                    res.send('{"result_code" : "N"}');
                } 
            })
    })
    connection.end;
}