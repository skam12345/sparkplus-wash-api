const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const payinsertpaydata = require('../../query/set_washpay/pay_insert_paydata');
const payselectFleet = require('../../query/set_washpay/pay_select_fleet');
const payselectMembership = require('../../query/set_washpay/pay_select_membership');



module.exports.setwashpay = (req, res) => {
    let car_no = req.body.car_no;
    var mun_mem_no ='';
    var wud_fleet_no = '';
    let use_type = req.body.use_type;
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
    console.log('pay_type ; '+pay_type);
    connection.query(payselectMembership(car_no), (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            mun_mem_no = rows[0].mun_mem_no;
            connection.query(payselectFleet(car_no), (error, rows) =>{
                if (error) throw error;
                if(rows.length > 0){
                    wud_fleet_no = rows[0].wud_fleet_no;
                    connection.query(payinsertpaydata(mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
                        option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code,
                        pay_type, terminal_type),(error, rows) => {
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"result_code" : "Y"}');
                        }else{
                            res.send('{"result_code" : "N"}');
                        }       
                    })                    
                }else{
                    wud_fleet_no = 'N';
                    connection.query(payinsertpaydata(mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
                        option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code,
                        pay_type, terminal_type),(error, rows) => {
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"result_code" : "Y"}');
                        }else{
                            res.send('{"result_code" : "N"}');
                        }       
                    })
                }
            })
        }else{
            mun_mem_no = 'N';
            connection.query(payselectFleet(car_no), (error, rows) =>{
                if (error) throw error;
                if(rows.length > 0){
                    wud_fleet_no = rows[0].wud_fleet_no;
                    connection.query(payinsertpaydata(mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
                        option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code,
                        pay_type, terminal_type),(error, rows) => {
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"result_code" : "Y"}');
                        }else{
                            res.send('{"result_code" : "N"}');
                        }       
                    })
                }else{
                    wud_fleet_no = 'N';
                    connection.query(payinsertpaydata(mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
                        option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code,
                        pay_type, terminal_type),(error, rows) => {
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"result_code" : "Y"}');
                        }else{
                            res.send('{"result_code" : "N"}');
                        }       
                    })
                }
            })
        }
    })
}