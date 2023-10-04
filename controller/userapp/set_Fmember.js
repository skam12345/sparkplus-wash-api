const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertfleetinfo = require('../../query/userapp/set_fmember/insert_fleetinfo');
const selectfleetno = require('../../query/userapp/set_fmember/select_fleetno');

module.exports.setfmember = (req, res) =>{
    let car_no = req.body.car_no;
    let fleet_id = req.body.fleet_id;
    let pwd = req.body.pwd;
    let mem_type = req.body.mem_type;
    let fleet_name = req.body.fleet_name;
    let mem_tel = req.body.mem_tel;
    let mem_email = req.body.mem_email;
    let com_num = req.body.com_num;    
    let agree_age = req.body.agree_age;
    let agree_service = req.body.agree_service;
    let agree_privacy = req.body.agree_privacy;
    let agree_finance = req.body.agree_finance;
    let agree_sms = req.body.agree_sms;
    let agree_location = req.body.agree_location;
    
    connection.query(insertfleetinfo(fleet_id, pwd , mem_type, fleet_name, mem_tel, mem_email , com_num,
        agree_age, agree_service , agree_privacy, agree_finance, agree_sms, agree_location), (error, rows) =>{
            if (error) throw error;
            if(rows.affectedRows > 0){
                connection.query(selectfleetno(car_no), (error, rows) => {
                    if (error) throw error;
                                    res.send('{"result_code" : "Y", "mem_no" : "'+ rows[0].mem_no +'"}');

                    
                })
            }else{
                res.send('{"result_code" : "N"}')
            }    
        })
        connection.end;

}