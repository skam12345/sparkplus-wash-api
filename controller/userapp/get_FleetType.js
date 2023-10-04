const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectfleettype = require('../../query/userapp/get_fleettype/select_fleettype');

module.exports.getfleettype = (req, res) =>{
    let list = '[\n';
    connection.query(selectfleettype, (error, rows) =>{
        if (error) throw error;
        for(var i =0; i< rows.length; i++){
            list += '{ "fleet_type " : "' + rows[i].fleet_type +'", "fleet_type_name" : "'+ rows[i].fleet_type_name+'"} ,';
        }
        list = list.slice(0, -1);
        list += ']';
        res.send(list);
    })
    connection.end;

}