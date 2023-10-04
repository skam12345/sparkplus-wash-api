const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectloginmem = require('../../query/userapp/chk_login/select_loginmem');
const selectloginfleet = require('../../query/userapp/chk_login/select_loginfleet');

module.exports.chklogin = (req, res) =>{
    let mem_type = req.body.mem_type;
    let car_no = req.body.car_no;
    let fleet_id = req.body.fleet_id;
    let pwd = req.body.pwd;
    console.log(22222, mem_type);
    if(mem_type == '01'){
        connection.query(selectloginmem(car_no, pwd), (error, rows) => {
            if (error) throw error;
            if(rows[0].login_count == 0){
                res.send('{"result_code" : "N"}')
            }else{
                res.send('{"result_code" : "Y"}')
            }
        })
    }else{
        connection.query(selectloginfleet(fleet_id, pwd), (error, rows) =>{
            console.log('fleet_id'+fleet_id);
            if (error) throw error;
            if(rows[0].login_count == 0){
                res.send('{"result_code" : "N"}')
            }else{
                res.send('{"result_code" : "Y"}')
            }
        })
    }
    connection.end;

}