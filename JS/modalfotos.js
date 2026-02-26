const fotos = document.querySelectorAll(".fotoGaleria");
const modal = document.getElementById("modalGaleria");
const imgModal = document.getElementById("imgModal");
const fechar = document.getElementById("fecharModal");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

let indiceAtual = 0;

function abrirModal(indice){
    indiceAtual = indice;
    imgModal.src = fotos[indiceAtual].src;
    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function fecharModal(){
    modal.style.display = "none";

    document.body.style.overflow = "auto";
}

function mostrarProxima(){
    indiceAtual++;
    if(indiceAtual >= fotos.length){
        indiceAtual = 0;
    }
    imgModal.src = fotos[indiceAtual].src;
}

function mostrarAnterior(){
    indiceAtual--;
    if(indiceAtual < 0){
        indiceAtual = fotos.length - 1;
    }
    imgModal.src = fotos[indiceAtual].src;
}

fotos.forEach((foto, index) => {
    foto.addEventListener("click", () => {
        abrirModal(index);
    });
});

fechar.addEventListener("click", fecharModal);
proximo.addEventListener("click", mostrarProxima);
anterior.addEventListener("click", mostrarAnterior);

document.addEventListener("keydown", (e) => {
    if(modal.style.display === "flex"){
        if(e.key === "Escape"){
            fecharModal();
        }
        if(e.key === "ArrowRight"){
            mostrarProxima();
        }
        if(e.key === "ArrowLeft"){
            mostrarAnterior();
        }
    }
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        fecharModal();
    }
});