const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertmempayinfo = require('../../query/userapp/set_regcard/insert_mempayinfo');
const updatepayinfo = require('../../query/userapp/set_updatecard/update_payinfo');

module.exports.kakaopay = (req, res) =>{
    let request = require('request');
    console.log(req.body);

}   