const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectsessionmem = require('../../query/userapp/get_logininfo/select_sessionmem');
const selectsessionfleetm = require('../../query/userapp/get_logininfo/select_sessionfleet');


module.exports.getlogininfo = (req, res) =>{
    let mem_type = req.body.mem_type;
    let car_no = req.body.car_no;
    let fleet_id = req.body.fleet_id;

    if(mem_type == '01'){
        connection.query(selectsessionmem(car_no), (error, rows) => {
            if (error) throw error;
            console.log('mem_id : '+rows[0].mem_id);
            res.send('{"mem_no" : "'+ rows[0].mem_no +'", "mem_type" : "'+ rows[0].mem_type +
            '", "mem_name" : "'+ rows[0].mem_name+'", "mem_id" : "' + rows[0].mem_id+'"}')
        })
    }else{
        connection.query(selectsessionfleetm(fleet_id), (error, rows) =>{
            if (error) throw error;
            res.send('{"mem_no" : "'+ rows[0].mem_no +'", "mem_type" : "'+ rows[0].mem_type +
            '", "mem_name" : "'+ rows[0].mem_name+'", "mem_id" : "' + rows[0].mem_id+'"}')
        })
    }
    connection.end;

}