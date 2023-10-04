const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectfleetname = require('../../query/userapp/chk_fleetname/select_fleetname');

module.exports.chkfleetname = (req, res) =>{
    let fleet_name = req.body.fleet_name;
    connection.query(selectfleetname(fleet_name), (error, rows) =>{
        if (error) throw error;
        if(rows[0].f_count == 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.end;

}