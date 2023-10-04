const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

// const init_intro = require('../query/init/init_intro');
const chk_intro1 = require('../../query/init/chk_intro1');
const chk_intro2 = require('../../query/init/chk_intro2');

module.exports.chkintro = (req, res) =>{
    var laneNo = req.body.lane_no;
    if (laneNo == '01'){
        connection.query(chk_intro1, (error, rows) =>{
            if (error) throw error;
            res.send('{ "car_no" : "'+ rows[0].icn_lane01_carno+'"}');
        })
    }else if(laneNo == '02'){
        connection.query(chk_intro2, (error, rows) =>{
            if (error) throw error;
            res.send('{ "car_no" : "'+ rows[0].icn_lane02_carno+'"}');
        })
        
    }
}