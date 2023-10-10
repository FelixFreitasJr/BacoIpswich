function abrirImagem(src, alt) {
    // Cria um novo elemento de imagem
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.style.display = "block";
    img.style.margin = "0 auto";

    // Cria um novo elemento de div para conter a imagem
    var div = document.createElement("div");
    div.id = "imagemAmpliada";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.appendChild(img);

    // Adiciona o div ao corpo do documento
    document.body.appendChild(div);

    // Remove o div quando é clicado
    div.addEventListener("click", function() {
        document.body.removeChild(div);
    });
}