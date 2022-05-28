const express = require('express'); 
const cors = require('cors');
require('dotenv').config(); 

class Server {
    constructor(){
        this.app   = express();
        this.port  = process.env.PORT;
        this.paths = {};
        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }
    middlewares() {
        // CORS
        this.app.use( cors() );
        // Public Folder
        this.app.use( express.static('public') );
    }
    routes() {
    }
    listen() {
        this.app.listen( this.port, () => {
            console.log('Server active at port ', this.port );
        });
    }
}
module.exports = Server