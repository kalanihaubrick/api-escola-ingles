const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaController.PegaUmaTurma);
router.put('/turmas/:id', TurmaController.atualizaTurma);
router.delete('/turmas/:id', TurmaController.deletaTurma);
router.post('/turmas', TurmaController.criaUmaTurma);

module.exports = router;