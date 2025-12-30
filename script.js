// script.js - Versão final anti-bug

document.addEventListener('DOMContentLoaded', function() {
    // Garante que popup começa escondido ao carregar qualquer página
    const popup = document.getElementById('victory-popup');
    if (popup) {
        popup.classList.add('popup-hidden');
    }
});

function triggerVictory(text = "Você está progredindo incrivelmente!") {
    const popupText = document.getElementById('victory-text');
    if (popupText) popupText.textContent = text;

    const popup = document.getElementById('victory-popup');
    if (popup) popup.classList.remove('popup-hidden');

    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 180,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#ff6b6b', '#764ba2', '#ffd700', '#51cf66', '#ff9ff3']
        });
    }
}

function closeVictory() {
    const popup = document.getElementById('victory-popup');
    if (popup) popup.classList.add('popup-hidden');
}
