const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const  updatewashctl = require('../../query/update_Mergectl/update_washctl');

module.exports.updatemergectl = (req, res) =>{
    let carno = req.body.car_no;
    connection.query(updatewashctl(carno), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}');
        }else{
            res.send('{"result_code" : "N"}');
        }  
    })
};