      //conectando del lado del frontend los sockets
      let socket = io();

      //los on son utilizados para escuchar por informacion o sucesos
      socket.on("connect", function () {
          console.log("conectando al servidor");
      });
      //funcion que se dispara cuando perdemos conexion con el servidor
      socket.on("disconnect", function () {
          console.log("se perdio la conexion con el servidor");
      });

      //los emit son para emitir/enviar informacion   y esta informacion se envia inmediatamente despues de que se realizo la conexion con el servidor. el metodo emit solo funciona en comunicacion 1 a 1  (maquina cliente a maquina servidor e manera privada)
      socket.emit(
          "enviarMensaje", {
              usuario: "bryan",
              mensaje: "Hola mundo",
          },
          function (resp) {
              console.log("respuesta server: ", resp);
          }
      );
      //escuchando la respuesta del servidor
      socket.on("enviarMensaje", function (mensaje) {
          console.log("servidor:", mensaje);
      });