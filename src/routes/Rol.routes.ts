
import { Router } from "express"
import RoleController, {} from "../controllers/rol.controller"

const router = Router();
const rol=RoleController

router.post("/",rol.createRol)
router.get("/",rol.getRoles)
router.get("/:id",rol.BuscarRol)
router.delete("/:id",rol.DeleteRol)
router.put("/:id",rol.UpdateRol)
export default router