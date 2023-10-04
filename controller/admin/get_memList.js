const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmemlist = require('../../query/admin/get_memlist/select_memlist');

module.exports.getmemlist = (req, res) =>{
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var mem_type = req.body.mem_type;
    var mem_status = req.body.mem_status;
    var car_no = req.body.car_no;
    var mem_id = req.body.mem_id;
    var mem_tel = req.body.mem_tel;
    var list = '[\n';

    function chkundefined(a){
        if(a == undefined){
            a ='';
        }
    }
    chkundefined(mem_type);
    chkundefined(mem_status);
    chkundefined(car_no);
    chkundefined(mem_id);
    chkundefined(mem_tel);

    connection.query(selectmemlist(start_date, end_date, mem_type, mem_status, car_no, mem_id, mem_tel), (error, rows) =>{
        if (error) throw error;
         if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"mem_no" : "'+ rows[i].mem_no +'", "mem_id" : "'+ rows[i].mem_id+'", "mem_name" : "'+ rows[i].mem_name +
                    '", "mem_status" : "'+ rows[i].mem_status +'", "mem_type" : "'+ rows[i].mem_type +
                    '", "mem_tel" : "'+ rows[i].mem_tel+'", "fleet_dc" : "'+ rows[i].fleet_dc +
                    '", "fleet_prepay" : "'+ rows[i].fleet_prepay+'", "reg_date" : "'+ rows[i].reg_date +
                    '", "seq_no" : "'+ rows[i].seq_no+'" },';
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

