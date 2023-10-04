const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updateapprovalcancel = require('../../query/admin/set_paycancel/update_approvalcancel');
const updatepaydatacancel = require('../../query/admin/set_paycancel/update_paydatacancel');
const updatemembershippaydata = require('../../query/admin/set_paycancel/update_membershippaydata');
const updatecouponinfo = require('../../query/admin/set_paycancel/update_couponinfo');

module.exports.setpaycancel = (req,res) =>{
    let seq_no = req.body.seq_no;
    
    connection.query(updateapprovalcancel(seq_no), (error, rows) =>{
        if (error) throw error;
        if (rows.affectedRows > 0){
            connection.query(updatepaydatacancel(seq_no), (error, rows) =>{
                if (error) throw error;
                if (rows.affectedRows > 0){
                    res.send('{"result_code" : "Y"}')
                }else{
                    res.send('{"result_code" : "N"}')
                }
            })
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.query(updatemembershippaydata(seq_no), (error, rows) =>{
        if (error) throw error;
    })
    connection.query(updatecouponinfo(seq_no), (error, rows) =>{
        if (error) throw error;
    })
    connection.end;
}