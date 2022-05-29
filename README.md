# WEB SOCKET SERVER (NODE)

>#### Fundamentos básicos - App de cola en espera
 

>#### INTRO
  Los sockets han sido tradicionalmente la solución en torno a la cual se diseñan la mayoría de los sistemas de chat en tiempo real.
  Esto genera un canal de comunicación bidireccional entre un cliente y un servidor, (el servidor puede enviar mensajes a los clientes). 
  Cada vez que se escribe un mensaje de chat la idea es que el servidor lo obtenga   y lo envíe a todos los demás clientes conectados, (patron observable). 
  
>#### APP
La demo interactua por consola, simulando un sistema de asignación de turnos de un banco.  
Podemos ver a traves de las distintas ventanas / pantallas como los sockets emiten y escuchan listeners, los cuales actualizan estados a traves de distintos eventos. 
  

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.


### Instalación 🔧

### `Clonar` 
Clonar el proyecto utilizando git clone  dentro de tu entorno local para poder obtener el codigo fuente. 
```
git clone https://github.com/D-Perez85/Web-Socket-Server.git
```
### `Instalar Dependencias`
Instala las dependencias necesarias para poder correr la App...
```
npm install
```

### `Run`
Una vez instaladas las dependencias podras correr la App en el directorio del proyecto. 
Una vez compilado podras ver el resultado en http://localhost:8000/
Si quieres cambiar el nro de puerto deberas configurar la variable PORT del archivo .env con el que desees. 
```
nodemon app.js / node app.js
```

## Learn More About Node Js

You can learn more in the [Node Started Guide](https://nodejs.org/en/docs/guides/getting-started-guide/)

## Learn More About Socket.io

You can learn more in the [Socket io](https://socket.io/)
##
Made with ❤️ by [Damian Perez](https://github.com/D-Perez85) 😊
