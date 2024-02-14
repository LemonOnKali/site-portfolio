const typingHeader = document.getElementById('auto-typing-header');
const textToType = "BIENVENUE DANS L'UNIVERS DU SITE VITRINE";
let index = 0;

function typeText() {
    typingHeader.textContent += textToType[index];
    index++;

    if (index < textToType.length) {
        setTimeout(typeText, 50); // Réglez la vitesse de frappe (en millisecondes)
    }
}

typeText();
 

document.addEventListener('DOMContentLoaded', function () {
    // Ajoutez une classe au corps de la page pour déclencher l'animation générale
    document.body.classList.add('loaded');
});


document.addEventListener('DOMContentLoaded', function () {
    // Ajoutez une classe au corps de la page pour déclencher l'animation générale
    document.body.classList.add('loaded');

    // Ajoutez la classe initial aux éléments de services
    const serviceBlocks = document.querySelectorAll('.services-list div');
    serviceBlocks.forEach(block => {
        block.classList.add('initial');
    });
});

