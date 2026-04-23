function add() {

    var container = document.getElementById("Cards");

    var novoCard = document.createElement("div");
    novoCard.className = "card";
    novoCard.style.width = "22rem";
    novoCard.style.marginLeft = "20px";

    novoCard.innerHTML =
        "<img src='img/Lucas_Paqueta.png' class='card-img-top' alt='Lucas Paquetá'>" +
        "<div class='card-body'>" +
            "<h5 id='Nome2' class='card-title'>" +
                "<span class='card-title'>Lucas Paquetá</span> " +
                "<span id='Rank2' class='badge text-bg-secondary'>8,8</span>" +
            "</h5>" +
            "<p class='card-text'>" +
                "<span id='Data_Nas2'><strong>Nascimento:</strong> 27/08/1997</span><br>" +
                "<span id='Altura2'><strong>Altura:</strong> 1,80 m</span><br>" +
                "<span id='Posicao2'><strong>Posição:</strong> Meio-campista</span><br>" +
            "</p>" +
        "</div>";

    container.appendChild(novoCard);

}