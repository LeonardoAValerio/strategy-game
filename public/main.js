const buttonGame = document.querySelector("#buttonGame");
console.log(buttonGame);

buttonGame.addEventListener("click", () => {
    const idGame = document.querySelector("#messageInput").value;
    console.log(idGame);
    if(!idGame) return alert("Id de jogo não enviado!");
    connectToGame(idGame);
});

function connectToGame(idGame) {
    try {
        const socket = io("http://localhost:8000/games/"+idGame);
        
        socket.on("message", (message) => {
            const li = document.createElement("div");
            li.textContent = message;
            document.querySelector(".events").appendChild(li);
        });

        socket.on("map", (message) => {
            const map = document.querySelector(".map-game");
            console.log(message);
            map.innerHTML = "";

            message.forEach((row) => {
                const rowHtml = document.createElement("tr");

                row.forEach((column) => {
                    const columnHtml = document.createElement("td");
                    columnHtml.textContent = column.name;
                    rowHtml.appendChild(columnHtml);
                });

                map.appendChild(rowHtml);
            });
            li.textContent = message;
            
        });
    } catch(e) {
        alert(e);
    }
}