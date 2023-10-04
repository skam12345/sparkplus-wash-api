const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpersonalpw = require('../../query/admin/chk_lostpassword/select_personalpw');
const selectfleetpw = require('../../query/admin/chk_lostpassword/select_fleetpw');
const selectmatchfleetpw = require('../../query/admin/chk_lostpassword/select_matchfleetpw');
const selectmatchpersonpw = require('../../query/admin/chk_lostpassword/select_matchpersonpw');
const updatetemppw = require('../../query/admin/chk_lostpassword/update_temppw');

module.exports.chklostpw = (req, res) =>{
    let mem_type = req.body.mem_type;
    let phone_no = req.body.phone_no;
    let mem_id = req.body.mem_id;
    let mem_no = '';
    let temp_pwd = '';
    if (mem_type == '01'){
        connection.query(selectpersonalpw(mem_id, phone_no), (error, rows) =>{
            if (error) throw error;
            if(rows[0].id_count == 1){
                connection.query(selectmatchpersonpw(mem_id, phone_no), (error, rows) =>{
                    if (error) throw error;
                    temp_pwd = rows[0].temp_pwd;
                    mem_no = rows[0].mem_no;
                    connection.query(updatetemppw(temp_pwd, mem_no), (error, rows) => {
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"result_code" : "Y", "temp_pwd" : "'+temp_pwd+'"}')
                        }
                    })

                })
            }else{
                res.send('{"result_code" : "N", "temp_pwd" : "N"}')
            }
        })
    }else{
        connection.query(selectfleetpw(mem_id, phone_no), (error, rows) =>{
            if (error) throw error;
            if(rows[0].id_count == 1){
                connection.query(selectmatchfleetpw(mem_id, phone_no), (error, rows) =>{
                    if (error) throw error;
                    temp_pwd = rows[0].temp_pwd;
                    mem_no = rows[0].mem_no;
                    connection.query(updatetemppw(temp_pwd, mem_no), (error, rows) => {
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"result_code" : "Y", "temp_pwd" : "'+temp_pwd+'"}')
                        }
                    })

                })
            }else{
                res.send('{"result_code" : "N", "temp_pwd" : "N"}')
            }
        })
    }
}