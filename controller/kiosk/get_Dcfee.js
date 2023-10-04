const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectfleetper = require('../../query/get_dcfee/select_fleetper');

module.exports.getdcfee = (req, res) =>{
    let carno = req.body.car_no;
    connection.query(selectfleetper(carno), (error, rows) =>{
        if (error) throw error;
        res.send('{ "dc_percent" : "'+rows[0].dc_percent+'"}');
    })
};