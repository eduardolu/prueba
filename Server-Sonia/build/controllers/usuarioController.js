"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataBase_1 = __importDefault(require("../dataBase"));
class UsuarioController {
    index(req, res) {
        //pool.query("DESCRIBE usuarios");
        res.json('usuarios');
    }
    getOne(req, res) {
        res.json({ text: 'sacar usuario ' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dataBase_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ message: 'Game Saved' });
        });
    }
    create2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dataBase_1.default.query('INSERT INTO usuarios set ?', [req.body]);
            //console.log(req.body);
            res.json({ message: 'usuario Saved' });
        });
    }
    delete(req, res) {
        res.json({ text: 'eliminar ' + req.params.id });
    }
    update(req, res) {
        res.json({ test: 'Actualizar ' + req.params.id });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
