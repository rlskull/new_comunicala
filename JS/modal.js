
document.querySelectorAll(".equipe").forEach(item => {
    item.addEventListener("click", () => {

        const img = item.getAttribute("data-img");
        const titulo = item.getAttribute("data-titulo");
        const texto = item.getAttribute("data-texto");

        document.getElementById("modalImg").src = img;
        document.getElementById("modalTitulo").innerText = titulo;
        document.getElementById("modalConteudo").innerText = texto;

        document.getElementById("modalEquipe").style.display = "flex";
    });
});

document.querySelector(".close-modal").addEventListener("click", () => {
    document.getElementById("modalEquipe").style.display = "none";
});

document.getElementById("modalEquipe").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = "none";
    }
});


// Animação da equipe ao aparecer na tela
const equipes = document.querySelectorAll('.equipe');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

equipes.forEach(item => observer.observe(item));