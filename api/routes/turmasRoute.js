const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmaController.PegaUmaTurma)
    .put('/turmas/:id', TurmaController.atualizaTurma)
    .delete('/turmas/:id', TurmaController.apagaTurma)
    .post('/turmas', TurmaController.criaUmaTurma)
    .post('/turmas/:id/restaura', TurmaController.restauraTurma)

module.exports = router;