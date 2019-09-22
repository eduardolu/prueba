import {Request, Response, response} from 'express'

import pool from '../dataBase';
import { text } from 'body-parser';
import { request } from 'http';
import { promises } from 'fs';

class UsuarioController{

    public index (req:Request,res:Response) {
        //pool.query("DESCRIBE usuarios");
        res.json('usuarios')
    }
    public getOne (req:Request, res:Response){
        res.json({text: 'sacar usuario '+req.params.id})
    }
    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    }
    public async create2 (req:Request, res: Response): Promise<void>{
        const result = await pool.query('INSERT INTO usuarios set ?', [req.body]);
        //console.log(req.body);
        res.json({ message: 'usuario Saved' });
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