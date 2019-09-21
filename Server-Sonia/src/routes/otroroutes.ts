import { Router } from 'express';

class Otroroutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        this.router.get('/',(req,res) =>res.send('otros'));
    }

}
const otroroutes = new Otroroutes();
export default otroroutes.router;
