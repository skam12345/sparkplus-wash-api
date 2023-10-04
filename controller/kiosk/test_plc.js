var net = require('net');

module.exports.testplc = (req, res) =>{

    var client = net.connect({port : 17494, host : '192.168.0.7'}, function(){
        console.log('client connected')
        const turnon = new Uint8Array(3);
        turnon[0] = 0x20;
        turnon[1] = 3;
        turnon[2] =  0x00;
        const trunoff = new Uint8Array(3);
        trunoff[0] = 0x21;
        trunoff[1] = 3;
        trunoff[2] =  0x00;

        // client.write(turnon);
        client.write(trunoff)
        // setTimeout(() => client.write(trunoff), 5000);
    });
  
}

