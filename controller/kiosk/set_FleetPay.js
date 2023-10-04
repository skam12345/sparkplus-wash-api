const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertfleetprepaydata = require('../../query/set_fleetpay/insert_fleetprepaydata');
const updatefleet = require('../../query/set_fleetpay/update_fleet');

module.exports.setfleetpay = (req, res) =>{
    let fleet_no = req.body.fleet_no;
    let prod_code = req.body.prod_code;
    let get_count = req.body.get_count;
    let car_no = req.body.car_no;
    connection.query(insertfleetprepaydata(fleet_no, prod_code, get_count, car_no), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            console.log('{"result_code" : "Y"}');
        }else{
            console.log('{"result_code" : "N"}')
        }     
    })
    connection.query(updatefleet(fleet_no), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}');
        }else{
            res.send('{"result_code" : "N"}');
        }     
    })
}