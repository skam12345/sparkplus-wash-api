const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectfleetcarlist = require('../../query/admin/get_fleetcarlist/select_fleetcarlist')

module.exports.getfleetcarlist = (req, res) =>{
    let fleet_no = req.body.fleet_no;
    let list = '[';
    connection.query(selectfleetcarlist(fleet_no), (error, rows) =>{
        if (error) throw rows;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"car_no" : "'+ rows[i].car_no +'", "reg_date" : "'+ rows[i].reg_date+'", "seq_no" : "'+ rows[i].seq_no+'" },';
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