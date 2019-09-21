import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import indexroutes from './routes/indexroutes';
import otroroutes from './routes/otroroutes';
import { fromCallback } from "bluebird";

class server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes():void{
        this.app.use('/',indexroutes);
        this.app.use('/api/otro',otroroutes);
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('server in',this.app.get('port'))
        });
    }
}
const serve = new server();
serve.start();