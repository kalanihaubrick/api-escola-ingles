const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const turmas = require('../routes/turmasRoute')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(turmas)
}