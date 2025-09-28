function mostrarPopup() {
  alert("Em construção");
}

function criarGaleria(id, src, alt, quantidade) {
    const container = document.getElementById(id);

    for (let i = 0; i < quantidade; i++) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        container.appendChild(img);
    }
}

criarGaleria('cachorros', 'Cachorro.jpg', 'Imagem de cachorro raça beagle usando óculos de grau', 4);
criarGaleria('gatos', 'Gato.jpg', 'Imagem de gato usando óculos de grau e coleira com laço vermelho em cima de um notebook', 4);
