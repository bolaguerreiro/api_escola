const Permission=require("../models/Permission")
const Role=require("../models/Role")

class RbacController {
    async listPermissions(req, res){
        const data = await Permission.findAll()

        return res.this.status(200).send(data)
     }

     async listRoles(req, res){
        const data = await Role.findAll()

        return res.this.status(200).send(data)
     }

     async createOnePermission(req, res){
        try {
            const dados = req.body

            if(!dados.description){
                return res.status(400).send({message: "Descrição é obrigatória"})
            }

            const permissionExists = await Permission.findOne({where:{description:dados.description}})
            if(permissionExists){
                return res.status(400).send({message: "Permissão já existe"})
            }

            const novo = await Permission.create(dados)
            return res.status(201).send(novo)

        } catch (error) {
            console.log(error.message)
            return res.status(500).send("Algo deu errado")
            
        }

     }
    
     async createOneRole(){
        try {
            const dados = req.body

            if(!dados.description){
                return res.status(400).send({message: "Descrição é obrigatória"})
            }

            const roleExists = await Role.findOne({where:{description:dados.description}})
            if(roleExists){
                return res.status(400).send({message: "Permissão já existe"})
            }

            const novo = await Role.create(dados)
            return res.status(201).send(novo)

        } catch (error) {
            console.log(error.message)
            return res.status(500).send("Algo deu errado")
            
        }

     }

     }
    
     async listPermissionsByRole(){

     }
    
     async addPermissionToRole(){

     }
    
     async addRoleToUser(){

     }
}