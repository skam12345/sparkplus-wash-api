const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectnoticedetail = require('../../query/userapp/get_noticedetail/select_noticedetail');

module.exports.getnoticedetail = (req, res) =>{
    let seq_no = req.body.seq_no;
    connection.query(selectnoticedetail(seq_no), (error, rows) => {
        if (error) throw error;
        console.log(rows[0].contents.split("\n"))
        res.send('{"title" : "'+ rows[0].title  +'", "write_date" : "'+ rows[0].write_date  +'", "contents" : "'+ rows[0].contents.split("\n")  +'"}')
    })
}