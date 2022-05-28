const express = require('express'); 
const cors = require('cors');
require('dotenv').config(); 

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);        
        this.paths = {};
        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
        // Sockets
        this.sockets();
    }
    middlewares() {
        // CORS
        this.app.use( cors() );
        // Public Folder
        this.app.use( express.static('public') );
    }
    routes() {
    }
    sockets() {

        this.io.on('connection', socket=>{
            console.log('Cliente conectado', socket.id);

            socket.on('disconnect', ()=>{
            console.log('Cliente desconectado', socket.id);
            })
        });
    }
    listen() {
        this.server.listen( this.port, () => {
            console.log('Server active at port ', this.port );
        });
    }
}
module.exports = Server