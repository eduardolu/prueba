import {Request, Response, response} from 'express'

import pool from '../dataBase';
import { text } from 'body-parser';
import { request } from 'http';

class UsuarioController{

    public index (req:Request,res:Response) {
        //pool.query("DESCRIBE usuarios");
        res.json('usuarios')
    }
    public getOne (req:Request, res:Response){
        res.json({text: 'sacar usuario '+req.params.id})
    }
    public create (req:Request, res: Response){
        res.json({text: 'crear usuario'});
    }
    public delete (req:Request, res: Response){
        res.json({text: 'eliminar '+ req.params.id});
    }
    public update (req:Request, res: Response){
        res.json({test: 'Actualizar '+ req.params.id});
    }
}
const usuarioController = new UsuarioController();
export default usuarioController;