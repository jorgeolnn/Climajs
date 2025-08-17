// Capturar elementos del DOM
const contenedorClima = document.querySelector('.resultado');
const formulario = document.querySelector('.obtener_clima');
const inputCiudad = document.querySelector('#ciudad');
const selectPais = document.querySelector('#paises');

// Evento submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!inputCiudad.value || !selectPais.value) {
        mostrarMensaje('Por favor completa ambos campos', 'error');
        return;
    }

    obtenerClima(inputCiudad.value, selectPais.value);
});

// Función para llamar a la API
function obtenerClima(ciudad, pais) {
    const apiKey = '8e3f9f21798228118c604c359fba0c21';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod === '404') {
                mostrarMensaje('Ciudad no encontrada en el país seleccionado', 'error');
            } else {
                mostrarClima(data);
            }
            console.log(data);
        })
        .catch(err => console.log(err));
}

// Función para mostrar el clima
function mostrarClima(data) {
    const { name, main: { temp, temp_min, temp_max, humidity }, weather: [info] } = data;

    const tempActual = kelvinACelsius(temp);
    const tempMin = kelvinACelsius(temp_min);
    const tempMax = kelvinACelsius(temp_max);

    // Limpiar contenido anterior
    contenedorClima.innerHTML = '';

    // Crear tarjeta con el clima
    contenedorClima.innerHTML = `
        <h4>Clima en ${name}, ${selectPais.value}</h4>
        <img src="https://openweathermap.org/img/wn/${info.icon}@2x.png" alt="icono clima">
        <p>Temperatura actual: <strong>${tempActual}°C</strong></p>
        <p>Temperatura mínima: ${tempMin}°C</p>
        <p>Temperatura máxima: ${tempMax}°C</p>
        <p>Humedad: ${humidity}%</p>
    `;
}

// Función para convertir Kelvin a Celsius
function kelvinACelsius(temp) {
    return Math.round(temp - 273.15);
}

// Función para mostrar mensajes de error
function mostrarMensaje(mensaje, tipo) {
    const alerta = document.createElement('div');
    alerta.textContent = mensaje;
    const claseAlerta = tipo === 'error' ? 'alert-danger' : 'alert-info';
    alerta.classList.add('alert', claseAlerta, 'mt-2');


    formulario.appendChild(alerta);

    setTimeout(() => alerta.remove(), 3000);
}
