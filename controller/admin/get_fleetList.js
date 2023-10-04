const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectfleetlist = require('../../query/admin/get_fleetlist/select_fleetlist')

module.exports.getfleetlist = (req, res) =>{
    let list = '[';
    connection.query(selectfleetlist, (error, rows) =>{
        if (error) throw rows;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"fleet_no" : "'+ rows[i].fleet_no +'", "fleet_name" : "'+ rows[i].fleet_name+'" },';
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