import Sequelize from "sequelize";

// Creamos una conexion a la base de datos
// Para ello instanciamos un objeto de Sequelize al cual le pasamos el nombre de la base de datos, el usuario y la contraseña
// También le pasamos un objeto con los parámetros de conexión
// Los iguiente es exportarlo
export const sequelize = new Sequelize("api-node", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
