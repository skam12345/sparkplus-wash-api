const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);


// const init_intro = require('../query/init/init_intro');
const init_intro1 = require('../../query/init/init_intro1');
const init_intro2 = require('../../query/init/init_intro2');

module.exports.initintro = (req, res) =>{
    var laneNo = req.body.lane_no;
    console.log(req.body.lane_no);
    if (laneNo == '01'){
        connection.query(init_intro1, (error, rows) =>{
            if (error) throw error;
            if(rows.affectedRows > 0){
                res.send('{"result_code" : "Y"}');
            }else{
                res.send('{"result_code" : "N"}');
            }     
        })
    }else if(laneNo == '02'){
        connection.query(init_intro2, (error, rows) =>{
            if (error) throw error;
            if(rows.affectedRows > 0){
                res.send('{"result_code" : "Y"}');
            }else{
                res.send('{"result_code" : "N"}');
            }     
        })
        
    }
}