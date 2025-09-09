document.addEventListener("DOMContentLoaded", function() {
    // INICIALIZA A BIBLIOTECA DE ANIMAÇÃO
    AOS.init({
        duration: 800,
        once: true 
    });

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const body = document.body;
    const header = document.querySelector('.header');

    // Lógica para o menu hamburger
    const toggleMenu = () => {
        const isMenuOpen = hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        if (isMenuOpen) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    };

    hamburger.addEventListener("click", toggleMenu);

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // Fecha o menu com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Adiciona sombra ao header durante o scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Atualiza o ano do copyright automaticamente
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // =======================================================
    // LÓGICA PARA O DARK MODE
    // =======================================================
    const themeToggleButton = document.querySelector(".theme-toggle-button");

    // Função para aplicar o tema salvo
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Função para alternar o tema e salvar a preferência
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    // Adiciona o evento de clique ao botão
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    // Aplica o tema salvo assim que a página carrega
    applySavedTheme();
});