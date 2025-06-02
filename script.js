document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    const heartSVG = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    // Usa una ruta relativa para la imagen, compatible con GitHub Pages
    const turtleImageURL = './Tortuga.png';

    // Configuración: máximo de elementos flotantes
    const MAX_HEARTS = 10;
    const MAX_TURTLES = 7;
    let currentHearts = 0;
    let currentTurtles = 0;

    // Crea y anima un corazón flotante si no se supera el máximo
    function createHeart() {
        if (currentHearts >= MAX_HEARTS) return;
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = heartSVG;
        document.body.appendChild(heart);

        const size = Math.random() * 18 + 14;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        // Posición aleatoria en toda la pantalla
        const left = Math.random() * (window.innerWidth - size);
        const top = Math.random() * (window.innerHeight - size);
        heart.style.left = `${left}px`;
        heart.style.top = `${top}px`;
        heart.style.position = 'fixed';

        heart.style.animationDelay = `${Math.random() * 1.5}s`;

        currentHearts++;
        heart.addEventListener('animationend', () => {
            heart.remove();
            currentHearts--;
        });
    }

    // Crea y anima una tortuga flotante si no se supera el máximo
    function createTurtle() {
        if (currentTurtles >= MAX_TURTLES) return;
        const turtle = document.createElement('div');
        turtle.classList.add('turtle');
        const img = document.createElement('img');
        img.src = turtleImageURL;
        img.alt = 'Tortuga flotante';
        turtle.appendChild(img);
        document.body.appendChild(turtle);

        const size = Math.random() * 40 + 40;
        turtle.style.width = `${size}px`;
        turtle.style.height = `${size}px`;

        // Posición aleatoria en toda la pantalla
        const left = Math.random() * (window.innerWidth - size);
        const top = Math.random() * (window.innerHeight - size);
        turtle.style.left = `${left}px`;
        turtle.style.top = `${top}px`;
        turtle.style.position = 'fixed';

        turtle.style.animationDelay = `${Math.random() * 2.5}s`;

        currentTurtles++;
        turtle.addEventListener('animationend', () => {
            turtle.remove();
            currentTurtles--;
        });
    }

    // Inicializa algunos elementos al cargar (no crecen con el tiempo)
    for (let i = 0; i < MAX_HEARTS; i++) setTimeout(createHeart, i * 700);
    for (let i = 0; i < MAX_TURTLES; i++) setTimeout(createTurtle, i * 1200);

    // No se crean más elementos después de la carga inicial

    // Botón "Volver"
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        const btnTurtleImg = document.createElement('img');
        btnTurtleImg.src = turtleImageURL;
        btnTurtleImg.alt = 'Icono de tortuga';
        btnTurtleImg.classList.add('button-turtle-icon');
        backBtn.innerHTML = '';
        backBtn.appendChild(btnTurtleImg);
        backBtn.appendChild(document.createTextNode(' Volver a la primera carta'));
        backBtn.classList.add('back-btn');
        backBtn.addEventListener('click', () => {
            document.body.classList.remove('loaded');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500);
        });
    }

    // Botón "Siguiente Carta"
    const nextBtn = document.querySelector('a.btn');
    if (nextBtn) {
        const btnTurtleImg = document.createElement('img');
        btnTurtleImg.src = turtleImageURL;
        btnTurtleImg.alt = 'Icono de tortuga';
        btnTurtleImg.classList.add('button-turtle-icon');
        nextBtn.innerHTML = '';
        nextBtn.appendChild(document.createTextNode('Siguiente Carta '));
        nextBtn.appendChild(btnTurtleImg);
        nextBtn.classList.add('next-btn');
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.remove('loaded');
            setTimeout(() => {
                window.location.href = nextBtn.href;
            }, 500);
        });
    }
});