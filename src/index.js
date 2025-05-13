require('dotenv').config();
const app = require('./app/app'); // Asegúrate que esta ruta sea correcta
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});