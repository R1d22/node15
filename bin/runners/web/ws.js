const sio = require('socket.io');


let usersID = [];

const run = (httpServer) => {
    const io = sio(httpServer);

    io.on('connection', (socket) => {
        usersID += `${socket.id}`;
        console.log('Connection ID:', usersID)
        // console.log(`Connection ID: ${socket.id}`);

        socket.on('/chat', (data, cb) => {
            const message = data.message;
            console.log(message);
            const mes = cb({ message });
            

            // socket.emit('/res', {sendMes: mes})
       
            
        });
        // socket.emit('/res', () => {
        //     console.log('DATA:', data);
        // });
        socket.on('disconnect', () => {
            console.log(`Disconnection ID: ${socket.id}`);
        });
    });

};

module.exports = run