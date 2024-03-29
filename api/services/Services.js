const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }
    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async pegaUmRegistro(where = {}) {
        return database[this.nomeDoModelo].findOne({ where: { ...where } })
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where } })
    }

    async atualizaRegistro(dadosAtualizados, where, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: {...where } }, transacao)
    }

    async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { ...where } }, transacao)
    }

    async apagaRegistro(where = {}) {
        return database[this.nomeDoModelo].destroy({ where: {...where } })

    }

    async restauraRegistro(where = {}) {
        return database[this.nomeDoModelo].restore({ where: {...where} })
    }

    async encontraEContaRegistros(where = {}, agregadores) {
        return database[this.nomeDoModelo].findAndCountAll({ where: { ...where }, ...agregadores })
    }
}

module.exports = Services;