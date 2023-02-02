const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
    .get('/emails', PessoaController.pegaTodosEmails)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)

    .post('/pessoas', PessoaController.criaPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)

    .put('/pessoas/:id', PessoaController.atualizaPessoa)

    .delete('/pessoas/:id', PessoaController.apagaPessoa)



module.exports = router