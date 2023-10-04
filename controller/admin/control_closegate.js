var net = require('net');

module.exports.closegate = (req, res) =>{
    let gate_no = req.body.gate_no;
    let pc = 'PC';
    let name = pc+gate_no;
    var client = net.connect({port : 6001, host : '192.168.0.10'}, function(){
        client.write("S$CLOSE$" + name +"$E");
});
}