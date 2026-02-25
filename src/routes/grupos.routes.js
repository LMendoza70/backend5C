import {Router} from 'express'
import * as ctrl from '../controllers/grupos.controller.js'

const router =Router()

router.get('/',ctrl.getAllGrupos)
router.get('/:id',ctrl.getGrupoById)
router.post('/',ctrl.createGrupo)

export default router