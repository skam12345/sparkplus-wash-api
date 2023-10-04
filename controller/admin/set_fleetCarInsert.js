const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertfleetcar = require('../../query/admin/set_fleetcarinsert/insert_fleetcar');

module.exports.setfleetcarinsert = (req, res) =>{
    let fleet_no = req.body.fleet_no;
    let car_no = req.body.car_no;
    connection.query(insertfleetcar(fleet_no, car_no), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}');
        }else{
            res.send('{"result_code" : "N"}');
        }     
    })
    connection.end;
};