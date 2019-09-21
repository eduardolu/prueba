import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';

class Otroroutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        this.router.get('/',usuarioController.index);
    }

}
const otroroutes = new Otroroutes();
export default otroroutes.router;
