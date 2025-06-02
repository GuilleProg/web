document.addEventListener('DOMContentLoaded', () => {
    // Añade la clase 'loaded' al cuerpo para iniciar la transición de opacidad
    document.body.classList.add('loaded');

    // SVG para el corazón
    const heartSVG = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

    // URL de la imagen de la tortuga (¡REEMPLAZA ESTA URL CON TU IMAGEN SIN FONDO!)
    // Puedes usar una imagen de un sitio como Pixabay, Unsplash, o tu propia imagen subida.
    // Asegúrate de que la imagen tenga un fondo transparente (PNG es ideal).
    const turtleImageURL = '/Tortuga.png'; // Placeholder

    // Función para crear y animar un corazón flotante
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = heartSVG; // Inserta el SVG del corazón
        document.body.appendChild(heart);

        const size = Math.random() * 20 + 10; // Tamaño aleatorio para el corazón
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        heart.style.animationDelay = `${Math.random() * 3}s`; // Retraso aleatorio para la animación

        // Elimina el corazón después de su animación
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Función para crear y animar una tortuga flotante
    function createTurtle() {
        const turtle = document.createElement('div');
        turtle.classList.add('turtle');
        // Crea un elemento de imagen y establece su fuente
        const img = document.createElement('img');
        img.src = turtleImageURL;
        img.alt = 'Tortuga flotante';
        turtle.appendChild(img); // Inserta la imagen dentro del div de la tortuga
        document.body.appendChild(turtle);

        const size = Math.random() * 60 + 40; // Tamaño aleatorio para la tortuga, un poco más grande para la imagen
        turtle.style.width = `${size}px`;
        turtle.style.height = `${size}px`;
        turtle.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        turtle.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio más largo para la animación

        // Elimina la tortuga después de su animación
        turtle.addEventListener('animationend', () => {
            turtle.remove();
        });
    }

    // Crea corazones a intervalos regulares (menos frecuentes)
    setInterval(createHeart, 1000); // Crea un corazón cada 1 segundo
    // Crea tortugas a intervalos regulares (mucho menos frecuentes)
    setInterval(createTurtle, 2500); // Crea una tortuga cada 2.5 segundos

    // Lógica para el botón "Volver a la primera carta" en letter2.html
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        // Crea un elemento de imagen para el botón
        const btnTurtleImg = document.createElement('img');
        btnTurtleImg.src = turtleImageURL;
        btnTurtleImg.alt = 'Icono de tortuga';
        btnTurtleImg.classList.add('button-turtle-icon'); // Clase para estilizar el icono en CSS

        // Limpia el contenido actual y añade la imagen y el texto
        backBtn.innerHTML = '';
        backBtn.appendChild(btnTurtleImg);
        backBtn.appendChild(document.createTextNode(' Volver a la primera carta'));
        backBtn.classList.add('back-btn'); // Añade una clase para estilos específicos si es necesario

        backBtn.addEventListener('click', () => {
            // Añade una clase para la transición de salida antes de redirigir
            document.body.classList.remove('loaded');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500); // Espera a que termine la transición de salida
        });
    }

    // Lógica para el enlace "Siguiente Carta" en index.html
    const nextBtn = document.querySelector('a.btn');
    if (nextBtn) {
        // Crea un elemento de imagen para el botón
        const btnTurtleImg = document.createElement('img');
        btnTurtleImg.src = turtleImageURL;
        btnTurtleImg.alt = 'Icono de tortuga';
        btnTurtleImg.classList.add('button-turtle-icon'); // Clase para estilizar el icono en CSS

        // Limpia el contenido actual y añade el texto y la imagen
        nextBtn.innerHTML = '';
        nextBtn.appendChild(document.createTextNode('Siguiente Carta '));
        nextBtn.appendChild(btnTurtleImg);
        nextBtn.classList.add('next-btn'); // Añade una clase para estilos específicos si es necesario

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Previene la navegación inmediata
            // Añade una clase para la transición de salida antes de redirigir
            document.body.classList.remove('loaded');
            setTimeout(() => {
                window.location.href = nextBtn.href;
            }, 500); // Espera a que termine la transición de salida
        });
    }
});
