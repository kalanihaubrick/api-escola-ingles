const {Router} = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router
.get('/matriculas/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
.get('/matriculas/:estudanteId/matriculas', MatriculaController.pegaMatriculas)
.get('/matriculas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)

.post('/matriculas/:estudanteId/matricula', MatriculaController.criaMatricula)


.put('/matriculas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)


.delete('/matriculas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)


module.exports = router