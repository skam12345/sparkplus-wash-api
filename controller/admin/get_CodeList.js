const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcodelist = require('../../query/admin/get_codelist/select_codelist');

module.exports.getcodelist = (req, res) =>{
    let code_type = req.body.code_type;
    var list = '[\n';
    connection.query(selectcodelist(code_type), (error, rows) =>{
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