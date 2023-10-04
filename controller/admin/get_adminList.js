const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const selectadminlist = require('../../query/admin/get_adminlist/select_adminlist');
const connection = mysql2.createConnection(dbconfig);

module.exports.getadminlist = (req, res) =>{
    let admin_name = req.body.admin_name;
    var list = '[\n';

    function chkundefined(a){
        if(a == undefined){
            a ='';
        }
    }
        chkundefined(admin_name);
        connection.query(selectadminlist(admin_name), (error, rows)=>{
            if (error) throw error;
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"admin_id" : "'+ rows[i].admin_id +'", "admin_name" : "'+ rows[i].admin_name+'", "admin_tel" : "'+ rows[i].admin_tel +
                    '", "reg_date" : "'+ rows[i].reg_date +'", "seq_no" : "'+ rows[i].seq_no +'" },';
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