const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectnoticelist = require('../../query/admin/get_noticelist/select_noticelist');

module.exports.getnoticelist = (req, res) =>{
    let title = req.body.title;
    let contents = req.body.contents;
    var list = '[\n';

    function chkundefined(a){
        if(a == undefined){
            a ='';
        }
        chkundefined(title);
        chkundefined(contents);
    }
    connection.query(selectnoticelist(title, contents), (error, rows)=>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"notice_title" : "'+ rows[i].notice_title +'", "notice_contents" : "'+ rows[i].notice_contents.split("\n")+'", "write_admin" : "'+ rows[i].write_admin +
                '", "write_date" : "'+ rows[i].write_date +'", "seq_no" : "'+ rows[i].seq_no+'" },';
            }
            list = list.slice(0, -1);
            list += ']';
            res.send(list);
        }
        else{
            res.send('[]');
        }
    })
    connection.end;
}