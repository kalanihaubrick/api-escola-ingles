const Services = require('./Services')
const database = require('../models')

class PessoasServices extends Services {
    constructor() {
        super('Pessoas')
        this.matriculas = new Services('Matriculas')
    }

    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDoModelo]
            .findAndCountAll({ where: { ...where } })
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .findAll({ where: { ...where } })
    }

    async pegaTodosEmails() {
        return database[this.nomeDoModelo]
        .findAll({attributes: ['nome', 'email']})
    }

    async atualizaRegistroScopo(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .update(dadosAtualizados, { where: { id: id } }, transacao)
    }

    async atualizaTodosRegistros(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .update(dadosAtualizados, { where: { id: id } }, transacao)
    }

    async pegaUmRegistroScopo(where= {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .findOne({ where: { ...where} })
    }


    async cancelaPessoasEMatriculas(estudanteId) {
        return database.sequelize.transaction(async transacao => {
            await super.atualizaRegistro({ ativo: false }, estudanteId, { transaction: transacao })
            await this.matriculas.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao })
        })
    }

}

module.exports = PessoasServices