const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const deletewudseqno = require('../../query/admin/set_washctl/delete_wudseqno');
const deletewashseq = require('../../query/admin/set_washctl/delete_washseq');
const selectwudseqno = require('../../query/admin/set_washctl/select_wudseqno');

module.exports.setwashctl = (req, res) =>{
    let use_seq = req.body.use_seq;
    let wash_seq = req.body.wash_seq;
    let car_no = req.body.car_no;
    let wud_seq_no;

     connection.query(deletewashseq(wash_seq), (error, rows) =>{
            if (error) throw error;
            if (rows.affectedRows > 0){
                connection.query(selectwudseqno(car_no), (error, rows) =>{
                    if (error) throw error;
                    if(rows.length>0){
                        wud_seq_no = rows[0].wud_seq_no;
                        connection.query(deletewudseqno(wud_seq_no), (error, rows) =>{
                            if (error) throw error;
                            if (rows.affectedRows > 0){
                                res.send('{"result_code" : "Y"}')
                            }else{
                                res.send('{"result_code" : "N"}')
                            }
                        })
                    }else{
                        res.send('{"result_code" : "N"}')
                    }
                })
            }else{
                connection.query(selectwudseqno(car_no), (error, rows) =>{
                    if (error) throw error;
                    if(rows.length>0){
                        wud_seq_no = rows[0].wud_seq_no;
                        connection.query(deletewudseqno(wud_seq_no), (error, rows) =>{
                            if (error) throw error;
                            if (rows.affectedRows > 0){
                                res.send('{"result_code" : "Y"}')
                            }else{
                                res.send('{"result_code" : "N"}')
                            }
                        })
                    }else{
                        res.send('{"result_code" : "N"}')
                    }
                })
            }
        })
    
    
}