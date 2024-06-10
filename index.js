const os = require('os');
const { createServer } = require('net');

const hostname = os.hostname();
const port = 3000;

const server = createServer(socket => {
    console.log('Client connected');

    socket.on('data', data => {
        console.log(`Received from client: ${data}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server listening on ${hostname}:${port}`);
});
