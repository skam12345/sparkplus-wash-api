const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const getwashuse = require('../../query/userapp/get_washUse/select_wash_use');

module.exports.getwashuse = (req, res) =>{
    let list = '[\n';
    let mem_no = req.body.mem_no;
    connection.query(getwashuse(mem_no), (error, rows) =>{
        if (error) throw error;
        for(var i =0; i< rows.length; i++){
            list += '{ "prod_name " : "' 
            + rows[i].prod_name +'", "prod_type" : "' 
            + rows[i].prod_type+'", "option_name" : "'
            + rows[i].option_name+'", "wash_date" : "'
            + rows[i].wash_date+'"}\n';
        }
        list += ']';
        res.send(list);
    })
    connection.end;

}