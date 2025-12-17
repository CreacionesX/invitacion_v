const container = document.querySelector('.confetti-container');
const numberOfConfetti = 50;

// Array de símbolos posibles
const symbols = ['👠','🎂','🎁']; // puedes añadir los que quieras

for (let i = 0; i < numberOfConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Posición horizontal aleatoria
    confetti.style.left = Math.random() * 100 + 'vw';

    // Tamaño aleatorio
    const size = Math.random() * 15 + 8;
    confetti.style.fontSize = size + 'px';

    // Velocidad aleatoria de caída
    confetti.style.animationDuration = (Math.random() * 5 + 3) + 's';
    confetti.style.animationDelay = (Math.random() * 5) + 's';

    // Símbolo aleatorio
    confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    container.appendChild(confetti);
}
