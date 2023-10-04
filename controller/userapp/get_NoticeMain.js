const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectnoticelist = require('../../query/userapp/get_noticemain/select_noticelist');
    
module.exports.getnoticmain = (req,res) =>{
    var list_count = req.body.list_count;
    var list = '[\n';

    connection.query(selectnoticelist(list_count), (error, rows) =>{
        if (error) throw error;
        for(var i = 0; i < rows.length; i++){
            list +='{ "title" : "'+rows[i].title+'", "write_date" : "'+rows[i].write_date+'", "seq_no" : "'+ rows[i].seq_no +'"} ,';
        }
        list = list.slice(0, -1);
        list += ']';
        res.send(list);
    })
    connection.end;

}