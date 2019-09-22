import mysql from 'promise-mysql';
import keys from './keys';
//import { PoolCluster } from 'mysql';

const pool = mysql.createPool(keys.database);

pool.getConnection() //npm i promise-mysql@3.3.1
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

/*    pool.then((r: any) => r.getConnection().then((connection:any)=>{
        r.releaseConnection(connection);
        console.log('Conexion exitosa.')
    }));*/
    

export default pool;