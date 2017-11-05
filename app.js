var fs = require('fs');
var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();

var msg = process.argv[2];

if(process.argv.length>3) {
    var SERVER = process.argv[3];
} else {
    var CONFIG = JSON.parse(fs.readFileSync("./config.json", 'UTF-8'));
    var SERVER = CONFIG.server + ':' + CONFIG.port;
}
client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
    process.exit()

});

client.on('connect', function(connection) {
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
        process.exit()

    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
        process.exit()
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log(message.utf8Data);
            process.exit();
        }
    });

    function sendMessage() {
        if (connection.connected) {
            connection.sendUTF(msg);
        }
    }
    sendMessage();
});
client.connect('ws://' + SERVER);