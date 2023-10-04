const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const sumadmin = require('../../query/admin/get_adminSum/sum_admin');


module.exports.getadminsum = (req, res) =>{
    let admin_name = req.body.admin_name;

    function chkundefined(a){
        if(a == undefined){
            a ='';
        }
    }
    chkundefined(admin_name);
    connection.query(sumadmin(admin_name), (error, rows)=>{
        if (error) throw error;
        if(rows.length >0 ){
            res.send('{"account_fee" : "'+rows[0].account_seq+'"}')
        }else{
            res.send('{"account_fee" : "0"}')
        }
    })
    connection.end;

}