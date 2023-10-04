const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertdata = require('../../query/set_washControl/insert_data');
const selectwudno = require('../../query/set_washControl/select_wudseqno');

module.exports.setwashctl = (req, res) =>{
    let carno = req.body.car_no;
    let laneno = req.body.lane_no;
    console.log(888888888, laneno);
    var wud_seq_no = '';
    connection.query(selectwudno(carno), (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            wud_seq_no = rows[0].wud_seq_no;
            connection.query(insertdata(wud_seq_no, carno, laneno), (error, rows) => {
                if (error) throw error;
                if(rows.affectedRows > 0){
                    res.send('{"result_code" : "Y"}');
                }else{
                    res.send('{"result_code" : "N"}');
                }
            })
        }else{
            res.send('{"result_code" : "N"}');
        }
    })
}