"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Otroroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('otros'));
    }
}
const otroroutes = new Otroroutes();
exports.default = otroroutes.router;
