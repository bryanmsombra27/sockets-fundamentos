const {
    io
} = require('../server');


//para saber la informacion de una conexion  ,primer parametro es connection y el segundo una funcion que recibe como parametro conocido como cliente con el cual podemos  obtener toda la informacion de la computadora  o de la conexion que se establecio
io.on("connection", (client) => {
    console.log("usuario conectado");

    client.emit("enviarMensaje", {
        usuario: "admin",
        mensaje: "bienvenido a la aplicacion",
    });

    //funcion que se dispara cuando se pierde la conexion con el cliente
    client.on("disconnect", () => {
        console.log("usuario desconectado");
    });

    //escuchar el cliente
    client.on("enviarMensaje", (data, callback) => {
        console.log(data);

        //se envia para todo el mundo  que este conectado al servidor
        client.broadcast.emit()

        // if (message.usuario) {
        //     callback({
        //         resp: "todo saliio bien",
        //     });
        // } else {
        //     callback({
        //         resp: "salio mal",
        //     });
        // }
    });
});