const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectnoticemain = require('../../query/admin/get_noticemain/select_noticemain');

module.exports.getnoticemain = (req, res) =>{
    var list_count = req.body.list_count;
    var list = '[\n';

    connection.query(selectnoticemain(list_count), (error, rows) =>{
        if (error) throw error;
        for(var i = 0; i < rows.length; i++){
            list +='{ "title" : "'+rows[i].title+'", "write_date" : "'+rows[i].write_date+'", "seq_no" : "'+ rows[i].seq_no +'"} ,';
        }
        list = list.slice(0, -1);
        list += ']';
        console.log(list)
        res.send(list);
        console.log('abc');
    })
    connection.end;
}