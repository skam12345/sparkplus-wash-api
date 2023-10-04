const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const payselectmemno = require('../../query/set_mempay/pay_select_memno');
const payinsertmempay = require('../../query/set_mempay/pay_insert_mempay');

module.exports.setmempay = (req,res) =>{
    let car_no = req.body.car_no;
    var mun_mem_no = '';
    let prod_code= req.body.prod_code;
    let pay_day = req.body.pay_day;
    let reg_type = req.body.reg_type;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let is_brush = req.body.is_brush;
    let token = req.body.token;
    let pay_fee = req.body.pay_fee;
    connection.query(payselectmemno(car_no), (error, rows) => {
        if (error) throw error;
        if(rows.length > 0){
            mun_mem_no = rows[0].mun_mem_no;
        }else{
            mun_mem_no = 'N';   
        }
        connection.query(payinsertmempay(mun_mem_no, prod_code, car_no, pay_day, reg_type, start_date, end_date, is_brush, token, pay_fee),
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