const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertfleetcarinfo = require('../../query/userapp/set_fleetcarins/insert_fleetcarinfo');
const selectfcount = require('../../query/userapp/set_fleetcarins/select_fcount');

module.exports.setfleetcarins = (req, res) =>{
    let mem_no = req.body.mem_no;
    let car_no = req.body.car_no;
    connection.query(selectfcount(car_no) , (error, rows)=>{
        if (error) throw error;
        if(rows[0].f_count ==0){
            connection.query(insertfleetcarinfo(mem_no, car_no), (error, rows) =>{
                if (error) throw error;
                if(rows.affectedRows > 0){
                    res.send('{"result_code" : "Y"}')
                }else{
                    res.send('{"result_code" : "N"}')
                }
            })
        }else{
            res.send('{"result_code" : "Duple"}')
        }
    })
    connection.end;
  
}
