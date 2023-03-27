const wsUri = "wss://echo-ws-service.herokuapp.com";

function pageLoaded() {

    const chatOutput = document.querySelector(".chat_output");
    const input = document.querySelector(".input");
    const sendMsg = document.querySelector(".button_message");
    const sendGeo = document.querySelector(".button_geo");

    let socket = new WebSocket(wsUri);

    socket.onerror = () => {
        alert ("При передаче данных произошла ошибка");
    }

    socket.onmessage = (event) => {
        writeToChat(event.data, true);
    }

    sendMsg.addEventListener("click", sendMessage);
  
    function sendMessage() {
        if (!input.value) return;
        socket.send(input.value);
        writeToChat(input.value, false);
        input.value = "";
        
    }

    function writeToChat(message, isRecieved) {
        let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
        chatOutput.innerHTML += messageHTML;
    }

    sendGeo.addEventListener("click", sendGeolocation);

        
    function sendGeolocation() {

        if (!navigator.geolocation) {

            alert ("Навигация не поддерживается вашим браузером");

        } else {

            navigator.geolocation.getCurrentPosition(success, error);

            function success (position) {
                let { latitude, longitude } = position.coords;
                
                writeToChat(`<a href="https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}&amp;layer=mapnik">Местоположение</a>`, false);
        
            }
        
            function error () {
                writeToChat('Местонахождение неизвестно', false);
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", pageLoaded);