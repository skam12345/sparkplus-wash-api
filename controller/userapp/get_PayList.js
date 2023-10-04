const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpayinfo = require('../../query/userapp/get_paylist/select_payinfo');

module.exports.getpaylist = (req, res) =>{
     let mem_no = req.body.mem_no;
     var list = '[\n';
     connection.query(selectpayinfo(mem_no), (error, rows)=>{
        if (error) throw error;
        for(var i =0; i<rows.length; i++){
            list += '{"prod_name" : "'+ rows[i].prod_name +'", "option_name" : "'+ rows[i].option_name +'", "pay_date" : "'+ rows[i].pay_date +
            '",  "pay_fee" : "'+ rows[i].pay_fee +'", "pay_seq" : "'+ rows[i].pay_seq +'" },'
        }
        list = list.slice(0, -1);
        list += ']';
        res.send(list);
     })
     connection.end;

}