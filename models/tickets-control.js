const path = require('path'); 
const fs = require('fs'); 

class Ticket {
    constructor( numero, escritorio ) {
        this.numero = numero;
        this.escritorio = escritorio;
    }
}


class TicketControl{

    constructor(){
        this.ultimo = 0; 
        this.hoy = new Date().getDate(); 
        this.tickets = []; 
        this.ultimos = []; 

        this.init(); 
    }
    get toJson(){
            return {
                ultimo: this.ultimo, 
                hoy: this.hoy,  
                tickets: this.tickets, 
                ultimos: this.ultimos 
            }
        } 
        init(){
            const {hoy, ultimo, ultimos, tickets} = require('../db/data.json'); 
            if(hoy === this.hoy){
                this.tickets = tickets; 
                this.ultimo = ultimo; 
                this.ultimos = ultimos; 
            }else{
                //es otro dia
                this.guardarDB(); 
            }
        }
        guardarDB(){
            const dbPath = path.join(__dirname, '../db/data.json'); 
            fs.writeFileSync(dbPath, JSON.stringify(this.toJson))
        }
        siguiente() {
            this.ultimo += 1;
            const ticket = new Ticket( this.ultimo, null );
            this.tickets.push( ticket );
    
            this.guardarDB();
            return 'Ticket ' + ticket.numero;
        }
        atenderTicket( escritorio ) {

            // No tenemos tickets
            if ( this.tickets.length === 0 ) {
                return null;
            }
    
            const ticket = this.tickets.shift(); // this.tickets[0];
            ticket.escritorio = escritorio;
    
            this.ultimos.unshift( ticket );
    
            if ( this.ultimos.length > 4 ) {
                this.ultimos.splice(-1,1);
            }
    
            this.guardarDB();
    
            return ticket;
        }
    
    
    }
    module.exports = TicketControl; 