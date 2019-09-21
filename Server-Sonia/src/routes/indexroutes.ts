import { Router } from 'express';

class Indexroutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        this.router.get('/',(req,res) =>res.send('hello'));
    }

}
const indexroutes = new Indexroutes();
export default indexroutes.router;
