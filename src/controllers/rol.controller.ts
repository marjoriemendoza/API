import {Response,Request} from 'express'
import { AppDataSource } from '../data-source'
import { Rol } from '../models/Rol'

const rolRepository = AppDataSource.getRepository(Rol)
class RoleController{

static createRol = async (req: Request, res: Response) => {
    const {type} = req.body
    try {

  const rol = new Rol()
   rol.type = type

await rolRepository.save(rol)
return res.json({
   ok:true,
   statusCode:200,
   message:"rol creado"
})
        
    } catch (error) {
       return res.json({
            ok: false,
            statusCode: 500,
            message: `Error = ${error}`
        })
    }

    }

  static getRoles = async(req:Request,res:Response)=>{
    
    try {
        const rol= await rolRepository.find({where:{state:true}})
        return rol.length>0
        ? res.json({ok:true,rol}): res.json({ok:false,message:"not found"})
    } catch (error) {
        return res.json({
            ok: false,
            message: `Error = ${error}`
        })
    }
  }

  static BuscarRol = async (req:Request,res:Response)=>{
    const id = parseInt(req.params.id)
    try {
        const rol= await rolRepository.findOne({where:{id,state:true}})
      return rol
      ? res.json({ok:true,rol}): res.json({ok:false,message:"not found"})
    } catch (error) {
        return res.json({
            ok: false,
            message: `Error = ${error}`
        })
    }
  }
  static DeleteRol =async(req:Request,res:Response)=>{
         const id = parseInt(req.params.id)
    try {
        const rol= await rolRepository.findOne({where:{id,state:true}})
        //si el rol buscado es diferente a los que hay en la base de datos
        if(!rol){
          throw new Error("not found")
        }
        rol.state = false
        await rolRepository.save(rol)
        return res.json({ok:true,message:"rol eliminado"})
    } catch (error) {
         return res.json({
            ok: false,
            message: `Error = ${error}`
        })
    }
  }
  static UpdateRol =async(req:Request,res:Response)=>{
    const id = parseInt(req.params.id)
    const {type,} = req.body
    let role:Rol
    try {
       role= await rolRepository.findOne({where:{id,state:true}})
      if(!role){
        throw new Error("not found")
      }
      role.type=type
      await rolRepository.save(role)
      return role
      ? res.json({ok:true,message:"actualizado"}): res.json({ok:false,message:"not found"})
    } catch (error) {
      return res.json({
        ok: false,
        statusCode:500,
        message: `Error = ${error}`
    })
    }

  }
}


export default RoleController