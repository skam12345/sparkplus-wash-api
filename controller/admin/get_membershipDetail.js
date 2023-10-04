const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmembershipdetail = require('../../query/admin/get_membershipdetail/select_membershipdetail');

module.exports.getmembershipdetail = (req, res) =>{
    var seq_no = req.body.seq_no;
    connection.query(selectmembershipdetail(seq_no), (error, rows) =>{
        if (error) throw error;
        res.send('{"mem_no" : "'+rows[0].mem_no+'" , "car_no" : "'+rows[0].car_no+
        '", "prod_name" : "'+rows[0].prod_name+'", "use_status" : "'+rows[0].use_status+
        '", "is_brush" : "'+rows[0].is_brush+'", "pay_fee" : "'+rows[0].pay_fee+'", "pay_day" : "'+rows[0].pay_day+
        '", "pay_date" : "'+rows[0].pay_date+'", "phone_no" : "'+rows[0].phone_no+'", "end_date" : "'+rows[0].end_date+'" }')
    })
    connection.end;
}
