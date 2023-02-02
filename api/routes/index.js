const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const turmas = require('../routes/turmasRoute')
const niveis = require('../routes/niveisRoute')
const matriculas = require('../routes/matriculasRoute')

module.exports = app => {
    app.use(bodyParser.json(),
        pessoas,
        turmas,
        niveis,
        matriculas)
}