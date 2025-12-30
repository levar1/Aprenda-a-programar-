// script.js - Recompensas sutis sem popup

function showReward(xp = 100, gems = 50, text = "Missão concluída!") {
    // Atualiza os números no header (valores reais você pode salvar com localStorage depois)
    const pointsEl = document.getElementById('points');
    const streakEl = document.getElementById('streak');

    if (pointsEl) {
        let current = parseInt(pointsEl.textContent.replace(/\D/g,'')) || 0;
        pointsEl.textContent = (current + gems) + " 💎";
    }

    // Animação de texto subindo "+XP" e "+Gems"
    const rewardAnim = document.createElement('div');
    rewardAnim.className = 'reward-animation';
    rewardAnim.innerHTML = `
        <div>+${xp} XP</div>
        <div>+${gems} 💎</div>
        <div style="font-size:14px; margin-top:5px;">${text}</div>
    `;
    document.body.appendChild(rewardAnim);

    // Remove após animação
    setTimeout(() => rewardAnim.remove(), 3000);

    // Confetti leve
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#ff6b6b', '#764ba2', '#ffd700', '#51cf66']
        });
    }
}

// Exemplo de uso nas trilhas (você chama isso nos botões de submeter)
function completeMission(xp, gems, message) {
    showReward(xp, gems, message);
            }
