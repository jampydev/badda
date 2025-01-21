






document.addEventListener('DOMContentLoaded', () => {
    // Crear cursor decorativo
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Mover cursor decorativo con el mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Crear botón flotante interactivo
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);

    // Añadir el efecto de brillo al iframe al hacer clic
    button.addEventListener('click', () => {
        const iframe = document.querySelector('iframe');
        iframe.classList.add('glow');
        setTimeout(() => iframe.classList.remove('glow'), 2000);
    });

    // Crear partículas flotantes dinámicas
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;

        particle.addEventListener('animationend', () => particle.remove());
    };

    setInterval(createParticle, 200);

    // Animación de pulsación al hacer clic en el botón
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.9)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
});
