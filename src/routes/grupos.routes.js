import {Router} from 'express'
import * as ctrl from '../controllers/grupos.controller.js'
import vericador from '../midlewares/auth.midleware.js'

const router =Router()
//rutas publicas
router.get('/',ctrl.getAllGrupos)
router.get('/:id',ctrl.getGrupoById)
//ruta privada 
router.post('/',vericador,ctrl.createGrupo)

export default router