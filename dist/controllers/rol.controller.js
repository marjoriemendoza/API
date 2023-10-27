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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Rol_1 = require("../models/Rol");
const rolRepository = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
class RoleController {
}
_a = RoleController;
RoleController.createRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.body;
    try {
        const rol = new Rol_1.Rol();
        rol.type = type;
        yield rolRepository.save(rol);
        return res.json({
            ok: true,
            statusCode: 200,
            message: "rol creado"
        });
    }
    catch (error) {
        return res.json({
            ok: false,
            statusCode: 500,
            message: `Error = ${error}`
        });
    }
});
RoleController.getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rol = yield rolRepository.find({ where: { state: true } });
        return rol.length > 0
            ? res.json({ ok: true, rol }) : res.json({ ok: false, message: "not found" });
    }
    catch (error) {
        return res.json({
            ok: false,
            message: `Error = ${error}`
        });
    }
});
RoleController.BuscarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const rol = yield rolRepository.findOne({ where: { id, state: true } });
        return rol
            ? res.json({ ok: true, rol }) : res.json({ ok: false, message: "not found" });
    }
    catch (error) {
        return res.json({
            ok: false,
            message: `Error = ${error}`
        });
    }
});
RoleController.DeleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const rol = yield rolRepository.findOne({ where: { id, state: true } });
        //si el rol buscado es diferente a los que hay en la base de datos
        if (!rol) {
            throw new Error("not found");
        }
        rol.state = false;
        yield rolRepository.save(rol);
        return res.json({ ok: true, message: "rol eliminado" });
    }
    catch (error) {
        return res.json({
            ok: false,
            message: `Error = ${error}`
        });
    }
});
RoleController.UpdateRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { type, } = req.body;
    let role;
    try {
        role = yield rolRepository.findOne({ where: { id, state: true } });
        if (!role) {
            throw new Error("not found");
        }
        role.type = type;
        yield rolRepository.save(role);
        return role
            ? res.json({ ok: true, message: "actualizado" }) : res.json({ ok: false, message: "not found" });
    }
    catch (error) {
        return res.json({
            ok: false,
            statusCode: 500,
            message: `Error = ${error}`
        });
    }
});
exports.default = RoleController;
//# sourceMappingURL=rol.controller.js.map