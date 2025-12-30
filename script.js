function triggerVictory(text) {
    document.getElementById('victory-text').textContent = text;
    document.getElementById('victory-popup').classList.remove('popup-hidden');
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#764ba2', '#ffd700', '#51cf66']
    });
}

function closeVictory() {
    document.getElementById('victory-popup').classList.add('popup-hidden');
}