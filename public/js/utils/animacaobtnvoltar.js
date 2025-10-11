export function createConfetti(callback) {
    const button = document.querySelector('.back-button');
    const rect = button.getBoundingClientRect();
    const colors = ['#ff6b9d', '#ffa06b', '#ffd93d', '#6bcf7f', '#4fc3f7', '#9b59b6', '#e74c3c', '#3498db'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        confetti.style.left = startX + 'px';
        confetti.style.top = startY + 'px';

        const angle = (Math.PI * 2 * i) / 50;
        const velocity = Math.random() * 300 + 200;
        const offsetX = Math.cos(angle) * velocity;
        const offsetY = Math.sin(angle) * velocity;
        const rotation = Math.random() * 720 + 360;

        confetti.style.setProperty('--offset-x', offsetX + 'px');
        confetti.style.setProperty('--offset-y', offsetY + 'px');
        confetti.style.setProperty('--rotation', rotation + 'deg');

        document.body.appendChild(confetti);

        const duration = Math.random() * 1 + 1.0;
        confetti.style.animation = `confetti-fall ${duration}s ease-out forwards`;

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);

        setTimeout(() => {
             if (callback) callback();
        }, 1000);

    }
}
