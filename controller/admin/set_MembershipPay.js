const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const payselectmemno = require('../../query/admin/set_membershippay/pay_select_memno');
const payinsertmempay = require('../../query/admin/set_membershippay/pay_insert_mempay');
const selectwpdseqno = require('../../query/admin/set_membershippay/select_wpdseqno');

module.exports.setmempay = (req,res) =>{
    let car_no = req.body.car_no;
    let is_member = req.body.is_member;
    var mun_mem_no = '';
    let prod_code= req.body.prod_code;
    let pay_day = req.body.pay_day;
    let reg_type = req.body.reg_type;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let is_brush = req.body.is_brush;
    let token = req.body.token;
    let pay_fee = req.body.pay_fee;
    let phone_no = req.body.phone_no;
    let wpd_seq_no;
    
    if(is_member == 'Y'){
        connection.query(payselectmemno(car_no), (error, rows) => {
            if (error) throw error;
                mun_mem_no = rows[0].mun_mem_no;
                connection.query(selectwpdseqno(car_no), (error, rows) =>{
                    if (error) throw error;
                    wpd_seq_no = rows[0].wpd_seq_no;
                    connection.query(payinsertmempay(mun_mem_no, prod_code, car_no, pay_day, reg_type, start_date, end_date, is_brush, token, pay_fee, phone_no, wpd_seq_no),
                (error, rows) =>{
                    if (error) throw error;
                    if(rows.affectedRows > 0){
                        res.send('{"result_code" : "Y"}');
                    }else{
                        res.send('{"result_code" : "N"}');
                    }     
                })
            }) 
               
        })
    }else{
        mun_mem_no = 'N';   
        connection.query(selectwpdseqno(car_no), (error, rows) =>{
            if (error) throw error;
            wpd_seq_no = rows[0].wpd_seq_no;
            connection.query(payinsertmempay(mun_mem_no, prod_code, car_no, pay_day, reg_type, start_date, end_date, is_brush, token, pay_fee, phone_no, wpd_seq_no),
        (error, rows) =>{
            if (error) throw error;
            if(rows.affectedRows > 0){
                res.send('{"result_code" : "Y"}');
            }else{
                res.send('{"result_code" : "N"}');
            }     
        })
    })
    }

    connection.end;
}