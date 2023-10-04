const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmembershiplist = require('../../query/admin/get_membershiplist/select_membershiplist');

module.exports.getmembershiplist = (req, res) =>{
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var reg_type = req.body.reg_type;
    var use_status = req.body.use_status;
    var car_no = req.body.car_no;
    var list = '[\n';

    connection.query(selectmembershiplist(start_date, end_date, reg_type, use_status, car_no), (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"car_no" : "'+ rows[i].car_no +'", "mem_no" : "'+ rows[i].mem_no+'", "prod_name" : "'+ rows[i].prod_name +
                '", "is_brush" : "'+ rows[i].is_brush +'", "use_status" : "'+ rows[i].use_status +
                '", "pay_fee" : "'+ rows[i].pay_fee+'", "pay_day" : "'+ rows[i].pay_day +
                '", "terminal_name" : "'+ rows[i].terminal_name+'", "pay_date" : "'+ rows[i].pay_date +
                '", "seq_no" : "'+ rows[i].seq_no+'", "use_end_date" : "'+ rows[i].use_end_date +'", "phone_no" : "'+ rows[i].phone_no +'" },';
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