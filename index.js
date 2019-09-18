const io = require('socket.io')();
const server = require('http').createServer();

io.attach(server, {
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

io.on('connection', (socket) => {
    console.log('connected');

    socket.on('text', (data) => {
        console.log("Received text:", data);
    });
});



server.listen(process.env.PORT || 8080);
