"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioController {
    index(req, res) {
        //pool.query("DESCRIBE usuarios");
        res.json('usuarios');
    }
    getOne(req, res) {
        res.json({ text: 'sacar usuario ' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'crear usuario' });
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
