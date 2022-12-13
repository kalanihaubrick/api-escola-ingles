const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const turmas = require('../routes/turmasRoute')
const niveis = require('../routes/niveisRoute')

module.exports = app => {
    app.use(bodyParser.json(),
        pessoas,
        turmas,
        niveis)
}