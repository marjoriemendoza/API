import {Router} from "express"
import dotenv from "dotenv"
import routerRol from "./Rol.routes"

dotenv.config()
const URL = process.env.url
const routes =Router();
routes.use(`${URL}/rol`,routerRol)

export default routes