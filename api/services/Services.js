const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }
    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo].findOne({ where: {id: id} })
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll()
    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { id: id } }, transacao)
    }

    async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { ...where } }, transacao)
    }

    async apagaRegistro(id) {
        return database[this.nomeDoModelo].destroy({where: {id: id}})

    }

    async restauraRegistro(id) {
        return database[this.nomeDoModelo].restore({where: {id: id}})
    }
}

module.exports = Services;