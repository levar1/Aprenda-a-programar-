// script.js - Funções compartilhadas por TODAS as páginas

function triggerVictory(text = "Você está progredindo incrivelmente!") {
    const popupText = document.getElementById('victory-text');
    if (popupText) {
        popupText.textContent = text;
    }

    const popup = document.getElementById('victory-popup');
    if (popup) {
        popup.classList.remove('popup-hidden');
    }

    // Confetti de celebração
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#ff6b6b', '#764ba2', '#ffd700', '#51cf66', '#ff9ff3']
        });
    }
}

function closeVictory() {
    const popup = document.getElementById('victory-popup');
    if (popup) {
        popup.classList.add('popup-hidden');
    }
}

// Função para testar no dashboard (opcional)
function testVictory() {
    triggerVictory("Teste de vitória funcionando! 🏆");
}