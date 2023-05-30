import express, { Application } from 'express';
import mysql, { Connection, MysqlError, FieldInfo } from 'mysql';

const app: Application = express();

/** Indicate Express app can accept JSON */
app.use(express.json());
/** Indicate Express app can accept JSON */

/** Indicate Express app can accept form data */
app.use(express.urlencoded({
    extended: false
}));
/** Indicate Express app can accept form data */

/** Routes */
app.use('/', (req, res) => {
    res.send('Daniel')
});
/** Routes */

/** MySQL connection */
const connection: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'example_db'
});

connection.connect();

connection.query('SELECT * FROM users', (err: MysqlError, rows, fields: FieldInfo) => {
  if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
  console.log('My name is', rows[0].first_name);
  console.log(fields.length);
});

connection.end();
/** MySQL connection */

app.listen(3000, () => {
    console.log('Node API app is running on port 3000.');
});