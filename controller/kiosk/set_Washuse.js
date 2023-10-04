const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertUsedata = require('../../query/set_washuse/insert_usedata');
const selectFleet = require('../../query/set_washuse/select_fleet');
const selectMembership = require('../../query/set_washuse/select_membership');



module.exports.setwashuse = (req, res) => {
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
    connection.query(selectMembership(car_no), (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            mun_mem_no = rows[0].mun_mem_no;
            connection.query(selectFleet(car_no), (error, rows) =>{
                if (error) throw error;
                if(rows.length > 0){
                    wud_fleet_no = rows[0].wud_fleet_no;
                    connection.query(insertUsedata(mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
                        option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code),(error, rows) => {
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"result_code" : "Y"}');
                        }else{
                            res.send('{"result_code" : "N"}');
                        }       
                    })                    
                }else{
                    wud_fleet_no = 'N';
                    connection.query(insertUsedata(mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
                        option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code),(error, rows) => {
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
            connection.query(selectFleet(car_no), (error, rows) =>{
                if (error) throw error;
                if(rows.length > 0){
                    wud_fleet_no = rows[0].wud_fleet_no;
                    connection.query(insertUsedata(mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
                        option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code),(error, rows) => {
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"result_code" : "Y"}');
                        }else{
                            res.send('{"result_code" : "N"}');
                        }       
                    })
                }else{
                    wud_fleet_no = 'N';
                    connection.query(insertUsedata(mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
                        option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code),(error, rows) => {
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