const animateBtn = document.getElementById('animateBtn');
const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const container = document.querySelector('.container');

let opened = false;

animateBtn.addEventListener('click', () => {
    if (!opened) {
        envelope.classList.add('open');
        setTimeout(() => {
            letter.classList.add('animate');
            animateBtn.textContent = 'Mostrar Amor';
        }, 1200);
        opened = true;
    } else {
        // Create floating hearts and "Te amo" messages
        for (let i = 0; i < 15; i++) {
            createHeart();
            createTeAmo();
        }
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '0px';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createTeAmo() {
    const teAmo = document.createElement('div');
    teAmo.classList.add('te-amo');
    teAmo.textContent = 'Te amo';
    teAmo.style.left = Math.random() * 100 + '%';
    teAmo.style.bottom = '0px';
    teAmo.style.animationDuration = 3 + Math.random() * 2 + 's';
    teAmo.style.animationDelay = Math.random() * 2 + 's';

    container.appendChild(teAmo);

    setTimeout(() => {
        teAmo.remove();
    }, 5000);
}
