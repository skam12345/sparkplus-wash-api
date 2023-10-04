const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectfleetid = require('../../query/userapp/chk_fleetid/select_fleetid');

module.exports.chkfleetid = (req, res) =>{
    let fleet_id = req.body.fleet_id;
    console.log(fleet_id);
    connection.query(selectfleetid(fleet_id), (error, rows) =>{
        if (error) throw error;
        if(rows[0].f_count == 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.end;

}