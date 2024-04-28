const { Router, query } = require('express') // 
const { auth } = require('../middleware/auth')
const CursoController = require('../controllers/CursoController')

const cursoRoutes = new Router()

cursoRoutes.post('/', auth,  CursoController.adicionaCurso)
cursoRoutes.get('/', auth, CursoController.listarCurso)
cursoRoutes.delete('/:id', auth, CursoController.excluiCurso)

cursoRoutes.put('/:id', auth, CursoController.alteraCurso)

module.exports = cursoRoutes