import {Request, Response} from 'express'

// import bd from '../dataBase';
import pool from '../dataBase';

class UsuarioController{

    public index (req:Request,res:Response) {
        pool.query("Hola");

        res.send('usuario');

    }
}
const usuarioController = new UsuarioController();
export default usuarioController;