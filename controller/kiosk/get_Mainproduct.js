const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectproductinfo = require('../../query/get_mainproduct/select_productinfo');

module.exports.getmainproduct = (req, res) => {
    let pro_type = req.body.pro_type;
    var list = '[\n';
    connection.query(selectproductinfo(pro_type), (error, rows) => {
        if (error) throw error;
        for(var i = 0; i < rows.length; i++){
            list += '{ "prod_code " : "' + rows[i].prod_code +'", "prod_name" : "'+ rows[i].prod_name
            +'", "prod_fee" : "' + rows[i].prod_fee + '", "main_img" : "'+rows[i].main_img
            +'", "main_plc" : "' + rows[i].main_plc + '", "prod_remarks" : "' + rows[i].prod_remarks
            +'", "dc_fee" : "' + rows[i].dc_fee +'"}\n';
        }
        list += ']';
        res.send(list);
    })
}