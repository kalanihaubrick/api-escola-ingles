const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmaController.PegaUmaTurma)

    .put('/turmas/:id', TurmaController.atualizaTurma)
    
    .post('/turmas', TurmaController.criaUmaTurma)
    .post('/turmas/:id/restaura', TurmaController.restauraTurma)

    .delete('/turmas/:id', TurmaController.apagaTurma)
    
module.exports = router;