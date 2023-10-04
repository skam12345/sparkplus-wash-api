const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcarno = require('../../query/userapp/chk_carno/select_carno');

module.exports.chkcarno = (req, res) =>{
    let car_no = req.body.car_no;
    connection.query(selectcarno(car_no), (error, rows) =>{
        if (error) throw error;
        if(rows[0].car_count == 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.end;

}