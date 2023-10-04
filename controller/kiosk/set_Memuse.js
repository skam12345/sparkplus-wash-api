const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmemwudseqno = require('../../query/set_memUse/select_memwudseqno');
const updatewashusedata = require('../../query/set_memUse/update_washusedata');

module.exports.setmemuse = (req, res) =>{
    let carno = req.body.car_no;
    var wud_seq_no = '';
    connection.query(selectmemwudseqno(carno), (error, rows) =>{
       if (error) throw error;
       wud_seq_no = rows[0].wud_seq_no;
       connection.query(updatewashusedata(wud_seq_no), (error, rows) =>{
        if (error) throw error;
            if(rows.affectedRows > 0){
                res.send('{"result_code" : "Y"}');
            }else{
                res.send('{"result_code" : "N"}');
            }  
       })
    });
}