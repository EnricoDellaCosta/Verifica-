const WebSocket = require("ws"); // per includere un modulo usiamo
const PORT = 5000;
const wsServer = new WebSocket.Server({
    // su quale porta userà il server
    // risponderà ipComputer:portaInserita da noi
    port: PORT

}); // stiamo creando un oggetto di tipo WebSocket.Server() {} passiamo un paramatro oggetto
// uno dei comandi più importanti è on() ovvero evento
console.log("Il Server è attivo e aspetta pacchetti sulla porta " + wsServer.options.port);

wsServer.on("connection", function (socket) {
    console.log("un client si è appena connesso, i dati del client sono: ");
    //console.log(socket);
    //socket.send("la tua connessione è stata accettata dal server");
    socket.on("message", function (msg) {
        console.log("ho ricevuto un messaggio: " + msg);
        socket.send("risposta dal server: " + msg);

        let res = 1;
        let operazione = " ";
        console.log("" + operazione);
        console.log("messaggio del client" + msg);
        if (isNaN("message" == false)) {

            if (operazione == "moltiplica") {
                socket.send(msg * msg)
            }
            else if (operazione == "raddoppia") {
                socket.send(msg * 2)
            }
            else if (operazione == "fattoriale") {
                for (i = msg; i > 1; i--) {
                    let res = (res * i);
                }
                console.log(res);
                socket.send(res);
            }
            socket.send(res);
        }
        else if (msg = "fattoriale" || msg == "raddoppia" || masg == "moltiplica") {
            operazione = msg;
            socket.send("Operazione scelta" + msg);
        }



    });
});
// console.log(wsServer.options.port);
