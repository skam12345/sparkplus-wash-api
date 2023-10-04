const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmembershipsum = require('../../query/admin/get_membershipsum/select_membershipsum');

module.exports.getmembershipsum = (req, res) =>{
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var reg_type = req.body.reg_type;
    var use_status = req.body.use_status;
    var car_no = req.body.car_no;
    connection.query(selectmembershipsum(start_date, end_date, reg_type, use_status, car_no), (error, rows)=>{
        if (error) throw error;
        if(rows.length >0 ){
            res.send('{"account_seq" : "'+rows[0].account_seq+'"}')
        }else{
            res.send('{"account_seq" : "0"}')
        }
    })
    connection.end;
}


