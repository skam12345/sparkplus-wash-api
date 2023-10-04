const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectfleetlist = require('../../query/get_fleetlist/select_fleetlist')

module.exports.getfleetlist = (req, res) =>{
    let car_no = req.boyd.car_no;
    connection.query(selectfleetlist(car_no), (error, rows) => {
        if (error) throw error;
        res.send('{ "fleet_no" : "'+rows[0].fleet_no+'", "fleet_name" : "'+rows[0].fleet_name+'", "prepay_count" : "'
        +rows[0].prepay_count+'"}');
    })
};