"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const Rol_routes_1 = __importDefault(require("./Rol.routes"));
dotenv_1.default.config();
const URL = process.env.url;
const routes = (0, express_1.Router)();
routes.use(`${URL}/rol`, Rol_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.routes.js.map