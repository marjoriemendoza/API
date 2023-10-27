"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_controller_1 = __importDefault(require("../controllers/rol.controller"));
const router = (0, express_1.Router)();
const rol = rol_controller_1.default;
router.post("/", rol.createRol);
router.get("/", rol.getRoles);
router.get("/:id", rol.BuscarRol);
router.delete("/:id", rol.DeleteRol);
router.put("/:id", rol.UpdateRol);
exports.default = router;
//# sourceMappingURL=Rol.routes.js.map