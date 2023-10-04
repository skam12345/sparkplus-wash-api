const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const deletefleetcarinfo = require('../../query/userapp/set_fleetcardel/delete_fleetcarinfo');

module.exports.setfleetcardel = (req, res) =>{
    let mem_no = req.body.mem_no;
    let car_no = req.body.car_no;
    let count = 0;
    for(var i =0; i < car_no.length;i++){
        connection.query(deletefleetcarinfo(mem_no, car_no[i]), (error, rows) =>{
            if (error) throw error;
            if(rows.affectedRows > 0){
                count += 1;
                if(count ==car_no.length){
                    res.send('{"result_code" : "Y"}');
                }
            }else{
                res.send('{"result_code" : "N"}');
            }
        })
    }
    connection.end;

   
}