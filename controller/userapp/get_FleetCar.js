const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectfleetcarno = require('../../query/userapp/get_fleetcar/select_fleetcarinfo');

module.exports.getfleetcar = (req, res) =>{
    let mem_no = req.body.mem_no;
    console.log('mem_no' + mem_no);
    var list = '[\n';

    connection.query(selectfleetcarno(mem_no), (error, rows) =>{
        if (error) throw error;
        for(var i = 0; i < rows.length; i++){
          list +=  '{"car_no" : "'+rows[i].car_no+'", "reg_date" : "'+rows[i].reg_date+'"} ,';
        }
        list = list.slice(0, -1);
        list += ']';
        res.send(list);
    })
    connection.end;

}