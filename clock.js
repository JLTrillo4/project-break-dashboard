function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();

    // Obtener la hora, minutos y segundos
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    // Obtener la fecha
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formattedDate = `${day}/${month}/${year}`;

    timeElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Llamar la función al cargar la página
updateClock();