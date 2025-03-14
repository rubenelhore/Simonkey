document.addEventListener('DOMContentLoaded', function() {
    // Hamburger - VERSIÓN SIMPLIFICADA
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const nav = document.querySelector('.nav');
    
    hamburgerBtn.addEventListener('click', function() {
        nav.classList.toggle('menu-open');
        // Eliminar todo el código que crea el menú móvil
    });
    
    // NUEVO CÓDIGO: Cerrar menú al seleccionar una opción
    const mobileMenuLinks = document.querySelectorAll('.nav-links .nav-link, .auth-buttons .btn');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Cerrar el menú al hacer clic en un enlace
            nav.classList.remove('menu-open');
        });
    });
    
    // NUEVO CÓDIGO: Cerrar menú al hacer clic en el logo
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('click', function() {
            // Cerrar el menú al hacer clic en el logo
            nav.classList.remove('menu-open');
        });
    }
    
    // Obtener todas las preguntas
    const questions = document.querySelectorAll('.faq-question');
    
    // Añadir evento de clic a cada pregunta
    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Encontrar la respuesta asociada a esta pregunta
            const clickedAnswer = this.nextElementSibling;
            
            // Obtener todas las respuestas
            const allAnswers = document.querySelectorAll('.faq-answer');
            
            // Cerrar todas las respuestas que no sean la clickeada
            allAnswers.forEach(answer => {
                // Si no es la respuesta actual, ocultar
                if (answer !== clickedAnswer) {
                    answer.style.display = 'none';
                }
            });
            
            // Alternar la visualización de la respuesta clickeada
            if (clickedAnswer.style.display === 'block') {
                clickedAnswer.style.display = 'none';
            } else {
                clickedAnswer.style.display = 'block';
            }
        });
    });
});