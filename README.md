# Weather App 🌤️

Una pequeña aplicación web que te permite **ver el clima de cualquier ciudad y país** usando la API de **OpenWeatherMap**.  
Está hecha con **HTML, CSS y JavaScript puro**, y tiene un diseño moderno con gradientes y tarjetas de clima.

---

<img width="383" height="552" alt="image" src="https://github.com/user-attachments/assets/8eea1e54-21cd-4a97-9ab4-ed44c2289f1f" />

---

## 💡 Qué hace la aplicación

- Buscar el clima de cualquier ciudad y país.  
- Muestra:
  - Temperatura actual.  
  - Temperatura mínima y máxima.  
  - Humedad.  
  - Ícono del clima correspondiente.  
- Mensajes de error claros si los campos están vacíos o la ciudad no existe.  


---

## 🔑 Configuración de la API (gratuita)

Para que la aplicación funcione necesitas una **API Key gratuita** de OpenWeatherMap. Esto es lo que debes hacer:

1. Ingresa a [OpenWeatherMap](https://openweathermap.org/) y **regístrate** o inicia sesión si ya tienes cuenta.  
2. Una vez dentro, ve a tu perfil y busca la sección **API keys**.  
3. Crea una nueva clave seleccionando la opción **Free (gratis)**.  
4. Recibirás un correo confirmando tu API Key.  
5. Copia esa API Key y reemplaza la que está en tu archivo JavaScript (`app.js` o donde tengas la función `obtenerClima`):

##javascript
const apiKey = 'TU_API_KEY_AQUI'; // Reemplaza por tu propia clave gratuita

---
## ⚡ Autor

**Jorge Lagunas Aqueveque**  
Proyecto realizado por mí, adaptando y mejorando un tutorial de YouTube para agregar funcionalidad extra, estilo propio y mejores prácticas en JavaScript y CSS.
