"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = __importDefault(require("../controllers/usuarioController"));
class Otroroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.default.index);
        this.router.get('/:id', usuarioController_1.default.getOne);
        this.router.post('/', usuarioController_1.default.create);
        this.router.put('/:id', usuarioController_1.default.update);
        this.router.delete('/:id', usuarioController_1.default.delete);
    }
}
const otroroutes = new Otroroutes();
exports.default = otroroutes.router;
