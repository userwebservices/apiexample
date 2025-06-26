// server/server.js
import express from 'express'; //express: Framework para crear servidores HTTP en Node.js de forma sencilla.
import path from 'path'; //path: Módulo nativo de Node.js para manejar rutas de archivos y directorios.
import { fileURLToPath } from 'url'; //fileURLToPath: Función para convertir una URL de módulo ES a una ruta de archivo. Necesaria porque usamos módulos ES (import).


const app = express(); //app es la instancia principal de la aplicación.
const PORT = 3000;//PORT es el número del puerto (3000), puedes cambiarlo si quieres.


// Setup para poder usar __dirname con módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos (HTML, JS, CSS) desde /public
app.use(express.static(path.join(__dirname, '../public')));

// Ruta simulada de la API: /api/revistas?categoria=investigacion
app.get('/api/revistas', (req, res) => {
  const categoriaSolicitada = req.query.categoria;

  // Datos simulados
  const todasLasRevistas = [
    { titulo: 'Revista A', categoria: 'investigacion' },
    { titulo: 'Revista B', categoria: 'ciencia' },
    { titulo: 'Revista C', categoria: 'investigacion' },
    { titulo: 'Revista D', categoria: 'arte' }
  ];

  // Filtrar por categoría si se proporciona
  const revistasFiltradas = categoriaSolicitada
    ? todasLasRevistas.filter(r => r.categoria === categoriaSolicitada)
    : todasLasRevistas;

  res.json(revistasFiltradas);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
