var wekinator = require('wekinator');
// var ws = require('ws');

// // Open a WebSocket server for forwarding
// // TODO: make ports configurable with cli arguments
// var webSocketServer = new ws.Server( {
//   perMessageDeflate: false, 
//   port: 12100
// } );

// Open a UDP server for listening to Wekinator
// TODO:: This could probably be easily generalized for all OSC traffic
var wekinatorServer = new wekinator();

// Connect to wekinator outputs on port 12000
wekinatorServer.connect( function() {
  wekinatorServer.on( 'osc', function( oscMessage ) {
    // var msg = JSON.parse( oscMessage );
    // if (oscMessage.address === '/output_1') {
    //     process.stdout.write('a')
    // }
    switch ( oscMessage.address ) {
        case '/output_1': process.stdout.write('a'); break;
        case '/output_2': process.stdout.write('b'); break;
        case '/output_3': process.stdout.write('c'); break;
        case '/output_4': process.stdout.write('d'); break;
        case '/output_5': process.stdout.write('e'); break;
    }

    // // Send outputs to any client listening on port 12100 
    // webSocketServer.clients.forEach( function (client) {
    //   client.send( JSON.stringify( oscMessage ) );
    // } )
  } );
} );
