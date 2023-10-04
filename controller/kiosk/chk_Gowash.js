const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const chkmergeloop = require('../../query/chk_gowash/chk_mergeloop');

module.exports.chkgowash = (req, res) =>{
    var carno = req.body.car_no;
    connection.query(chkmergeloop(carno), (error, rows) => {
        if (error) throw error;
        console.log('rows[0].wcn_seq_no : '+ rows[0].wcn_seq_no);
        if(rows[0].wcn_seq_no = 0){
            res.send('{"is_go" : "N"}');
        }else{
            res.send('{"is_go" : "Y"}');

        }
    })
};
