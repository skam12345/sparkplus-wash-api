const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmemdetail = require('../../query/userapp/get_memDetail/select_mem_detail');

module.exports.getmemdetail = (req, res) =>{
    let mem_no = req.body.mem_no;
    connection.query(selectmemdetail(mem_no), (error, rows) =>{
        if (error) throw error;
        res.send('{"mem_id" : "'+ rows[0].mem_id +'", "mem_name" : "'+ rows[0].mem_name +
            '", "mem_pwd" : "'+ rows[0].mem_pwd+'", "mem_type_name" : "' + rows[0].mem_type_name+'"}')
    })
    connection.end;

}