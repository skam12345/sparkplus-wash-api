const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectoptmenu = require('../../query/get_optmenu/select_optmenu');

module.exports.getoptmenu = (req, res) => {
    let pro_type = req.body.pro_type;
    let pin_seq_no = req.body.pin_seq_no;
    var list = '[\n';
    connection.query(selectoptmenu(pro_type, pin_seq_no), (error, rows) => {
        if (error) throw error;
        for(var i = 0; i < rows.length; i++){
            list += '{ "option_code " : "' + rows[i].option_code +'", "option_name" : "'+ rows[i].option_name
            +'", "option_fee" : "' + rows[i].option_fee + '", "option_img" : "'+rows[i].option_img
            +'", "option_plc" : "' + rows[i].option_plc +'"}\n';
        }
        list += ']';
        res.send(list);
    })
}