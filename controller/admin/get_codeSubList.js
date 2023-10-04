const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcodesublist = require('../../query/admin/get_codesublist/select_codesublist');

module.exports.getcodesublist = (req, res) =>{
    let code_type = req.body.code_type;
    var list = '[\n';
    connection.query(selectcodesublist(code_type), (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"code" : "'+rows[i].code+'", "code_name" : "'+rows[i].code_name+'"},';
            }
            console.log(list);
            list = list.slice(0, -1);
            console.log(list);
            list += ']';
            res.send(list);
        }
    })
    connection.end;
}