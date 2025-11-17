// Script para gerenciar o link ativo no menu desktop e mobile

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav_list .list');
    const mobileNavLinks = document.querySelectorAll('#mobileNavList .list');
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Função para remover .active de todos os links (desktop e mobile)
    function removeActive() {
        navLinks.forEach(link => link.classList.remove('active'));
        mobileNavLinks.forEach(link => link.classList.remove('active'));
    }

    // Gerenciar menu desktop
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            removeActive();
            navLinks[index].classList.add('active');
            mobileNavLinks[index].classList.add('active'); // Sincroniza com mobile
        });
    });

    // Gerenciar menu mobile
    mobileNavLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            removeActive();
            mobileNavLinks[index].classList.add('active');
            navLinks[index].classList.add('active'); // Sincroniza com desktop
            // Fecha o menu mobile após clicar
            mobileMenu.classList.remove('active');
            // Retorna ícone para hambúrguer
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-x');
            }
        });
    });

    // Gerenciar abertura/fechamento do menu mobile
    if (mobileBtn && mobileMenu) {
        const header = document.querySelector('header');
        mobileBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            header.classList.toggle('menu-active'); // Adiciona/remove classe no header
            // Toggle do ícone (hambúrguer para X)
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-x');
            }
        });
    }
});
