import {Request, Response} from 'express'

class UsuarioController{

    public index (req:Request,res:Response) {

        res.send('usuario');

    }
}
const usuarioController = new UsuarioController();
export default usuarioController;