const express = require('express');
const cors = require('cors');
const routers = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);
/**
 * Métodos HTTP
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


/**
 * Tipos de parâmentros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?"(fintros, paginação)
 * Route Params: Parâmentros utiloizados para indentificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where('')
  */



app.listen(3333);