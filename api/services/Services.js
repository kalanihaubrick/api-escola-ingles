const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }
    async criaRegistro(dados) {

    }

    async pegaTodosOsRegistros () {
        return database[this.nomeDoModelo].findAll()
    }

    async atualizaRegistro (dados) {

    }

    async apagaRegistros (id) {

    }
}

module.exports = Services;