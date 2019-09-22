import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';

class Otroroutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        this.router.get('/',usuarioController.index);
        this.router.get('/:id',usuarioController.getOne);
        this.router.post('/',usuarioController.create);
        this.router.put('/:id',usuarioController.update); 
        this.router.delete('/:id',usuarioController.delete);
    }

}
const otroroutes = new Otroroutes();
export default otroroutes.router;
