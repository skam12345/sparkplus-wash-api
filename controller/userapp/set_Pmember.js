const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertmeminfo = require('../../query/userapp/set_pmember/insert_meminfo');
const selectmemno = require('../../query/userapp/set_pmember/select_memno');

module.exports.setpmember = (req, res) =>{
    var car_no = req.body.car_no;
    let mem_tel = req.body.mem_tel;
    let agree_age = req.body.agree_age;
    let agree_service = req.body.agree_service;
    let agree_privacy = req.body.agree_privacy;
    let agree_finance = req.body.agree_finance;
    let agree_sms = req.body.agree_sms;
    let agree_location = req.body.agree_location;
    console.log('pmember'+car_no);

    connection.query(insertmeminfo(car_no, mem_tel, agree_age, agree_service, agree_privacy, agree_finance, 
        agree_sms, agree_location), (error, rows) =>{
            if (error) throw error;
            if(rows.affectedRows > 0){
                car_no = req.body.car_no;
                console.log('pmember'+car_no);
                connection.query(selectmemno(car_no), (error, rows) => {
                    if (error) throw error
                    res.send('{"result_code" : "Y", "mem_no" : "'+ rows[0].mem_no +'"}');
                })
            }else{
                res.send('{"result_code" : "N"}')
            }     
    })
    connection.end;

}
