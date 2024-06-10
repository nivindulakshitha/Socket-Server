const net = require('net');

const serverAddress = ''; // Change this to your server's IP address
const serverPort = 3000; // Change this to your server's port

const client = net.createConnection({ host: serverAddress, port: serverPort }, () => {
    console.log('Connected to server');
});

client.on('data', (data) => {
    console.log(`Received from server: ${data}`);
});

client.on('close', () => {
    console.log('Connection closed');
});

client.on('error', (error) => {
    console.error('Connection error:', error);
});
