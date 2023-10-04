const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);
var net = require('net');

const apiselectwudseqno = require('../../query/api_mergeloop/api_select_wudseqno');
const deletewashctl = require('../../query/api_mergeloop/delete_washctl');
const selectplccode = require('../../query/api_mergeloop/select_plc_code');

module.exports.apimergeloop = (req, res) =>{
    if(req.body.device_id == undefined){
        res.send('{"resultCode" : "01", "resultMessage" : "단말기 오류"}');
    }else{
        if(req.body.out_msg == undefined ){
            res.send('{"resultCode" : "02", "resultMessage" : "Merge 차량 접전 코드 오류"}');
        }else{
            res.send('{"resultCode" : "00", "resultMessage" : "성공"}')
        }
    }
    var wud_seq_no = '';
    connection.query(apiselectwudseqno, (error, rows) =>{
        if (error) throw error;
        wud_seq_no = rows[0].wud_seq_no;
            connection.query(selectplccode(wud_seq_no), (error, rows) => {
            if (error) throw error;
            let plc_code = rows[0].plc_code;
            let split_code = plc_code.split('::');
            console.log('plc_code : '+plc_code);
                var client = net.connect({port : 17494, host : '192.168.0.7'}, function(){
                    for(var i = 0; i <split_code.length; i++){
                    const turnon = new Uint8Array(3);
                    turnon[0] = 0x20;
                    turnon[1] = split_code[i];
                    turnon[2] =  0x00;
                    client.write(turnon);
                    const trunoff = new Uint8Array(3);
                    trunoff[0] = 0x21;
                    trunoff[1] = split_code[i];;
                    trunoff[2] =  0x00;
                    setTimeout(() => client.write(trunoff), 5000);
                } 
            });
        })
    })   
    connection.query(deletewashctl, (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            console.log('완료');
        }else{
            console.log('미완료')
        }
    }) 
}

