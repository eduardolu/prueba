"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Indexroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('hello'));
    }
}
const indexroutes = new Indexroutes();
exports.default = indexroutes.router;
