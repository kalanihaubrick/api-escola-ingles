const {Router} = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router
.get('/matriculas/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
.get('/pessoas/:estudanteId/matriculas', MatriculaController.pegaMatriculas)
.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)

.post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)


.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)


.delete('/matriculas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)


module.exports = router