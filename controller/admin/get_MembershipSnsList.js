const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmembershipsnslist = require('../../query/admin/get_membershipsnslist/select_membershipsnslist');

module.exports.getmembershipsnslist = (req, res) =>{
    let search_date = req.body.search_date;
    var list = '[\n';

    connection.query(selectmembershipsnslist(search_date), (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"car_no" : "'+ rows[i].car_no +'", "mem_no" : "'+ rows[i].mem_no+'", "prod_name" : "'+ rows[i].prod_name +
                '", "is_brush" : "'+ rows[i].is_brush +'", "use_status" : "'+ rows[i].use_status +
                '", "pay_fee" : "'+ rows[i].pay_fee+'", "pay_day" : "'+ rows[i].pay_day +
                '", "terminal_name" : "'+ rows[i].terminal_name+'", "pay_date" : "'+ rows[i].pay_date +
                '", "token" : "'+ rows[i].token+'", "prod_code" : "'+ rows[i].prod_code +'", "plc_code" : "'+ rows[i].plc_code +
                '", "phone_no" : "'+ rows[i].phone_no +'" },';
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