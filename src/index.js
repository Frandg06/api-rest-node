import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./database/Relations.js";

// Establecemos un puerto
const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
/*
La estructura de la app es la siguiente:
  1. creamos la app de express en nuestri archivbo app.js
  2. lo exportamos para que pueda ser usado en el index.js donde crearemos la conexion a la base de datos mediante sequelize y una funcion asincrona main
  3. usamos el middleware json para interpretar los json de las peticiones
  4. usamos el router para definir las rutas de la api
  5. iniciamos el servidor

  6.las peticiones de la api van al router
  7. el router importa las funciones de los controladores
  8. el controlador recoge y manda la informacion a un servicio

  9. El servicio ejecuta la logica para realizar la accion si es necesario llamara a un modelo (en caso necesarrio controlara el error) que sera donde se produzcan las consultas a la base de datos

  10. el modelo ejecuta la consulta y controla el error que se produce

  11. una vez el servicio y el modelo ejecutan la consulta y controlan el error, el controlador manda la informacion a la app una vez combrobado si se ha producido un error durante la ejecucion del servicio o el modelo

*/
