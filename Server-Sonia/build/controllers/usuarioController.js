"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import bd from '../dataBase';
const dataBase_1 = __importDefault(require("../dataBase"));
class UsuarioController {
    index(req, res) {
        dataBase_1.default.query("Hola");
        res.send('usuario');
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
