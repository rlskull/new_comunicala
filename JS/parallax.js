// Movimento Parallax da imagem
document.addEventListener("scroll", function () {
    const section = document.querySelector("#home05secParallax");
    const bg = section.querySelector(".parallax-bg");
    const rect = section.getBoundingClientRect();

    const speed = 0.3; // ajuste da velocidade
    const offset = rect.top * speed;

    bg.style.transform = `translateY(${offset}px)`;
});


// Mostrar/ocultar texto quando section entra na tela
const section = document.querySelector("#home05secParallax");
const texto = section.querySelector(".parallax-texto");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                texto.style.opacity = "1";   // aparece no centro
            } else {
                texto.style.opacity = "0";   // some quando a section acaba
            }
        });
    },
    { threshold: 0.3 }  // aparece quando 30% da section está visível
);

observer.observe(section);