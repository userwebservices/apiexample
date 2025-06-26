// public/main.js
import { Revista } from './Revista.js';

const btn = document.getElementById('btn-investigacion');
const container = document.getElementById('revistas-container');

btn.addEventListener('click', async () => {
    const res = await fetch('/api/revistas?categoria=investigacion'); //Petición al endpoint (al servidor)
    const revistas = await res.json(); //Convertimos el objeto respuesta en un json, para que pueda ser manejado con js

    container.innerHTML = ''; // limpiar antes de mostrar

    revistas.forEach(data => {
        console.log('Datos:', data); // 👈 Aquí ves el objeto completo
        const revista = new Revista(data.titulo, data.categoria);
        console.log('Objeto:', revista); // 👈 Aquí ves el objeto creado con los datos
      });
});