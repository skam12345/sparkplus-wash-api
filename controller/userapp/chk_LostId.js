const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpersonalid = require('../../query/admin/chk_lostid/select_matchpersonid');
const selectfleetid = require('../../query/admin/chk_lostid/select_fleetid');
const selectmatchpersonid = require('../../query/admin/chk_lostid/select_matchpersonid');
const selectmatchfleetid = require('../../query/admin/chk_lostid/select_fleetid');

module.exports.chklostid = (req, res) =>{
    let mem_type = req.body.mem_type;
    let phone_no = req.body.phone_no;
    if (mem_type == '01'){
        connection.query(selectpersonalid(phone_no), (error, rows) =>{
            if (error) throw error;
            if(rows[0].id_count == 1){
                connection.query(selectmatchpersonid(phone_no), (error, rows) =>{
                    if (error) throw error;
                    res.send('{"result_code" : "Y", "mem_id" : "'+rows[0].mem_id+'"}')
                })
            }else{
                res.send('{"result_code" : "N", "mem_id" : "N"}')
            }
        })
    }else{
        connection.query(selectfleetid(phone_no), (error, rows)=>{
            if (error) throw error;
            if(rows[0].id_count == 1){
                connection.query(selectmatchfleetid(phone_no), (error, rows) =>{
                    if (error) throw error;
                    res.send('{"result_code" : "Y", "mem_id" : "'+rows[0].mem_id+'"}')
                })
            }else{
                res.send('{"result_code" : "N", "mem_id" : "N"}')
            }
        })
    }
}