const Services = require('./Services');
const Sequelize = require('sequelize');
const database = require('../models');

class TurmasServices extends Services {
    constructor() {
        super('Turmas')
    }

    async pegaTurmasLotadas(lotacaoTurma) {
        return database[this.nomeDoModelo].findAndCountAll({
            where: {
                status: 'confirmado'
            },
            attributes: ['turma_id'],
            group: ['turma_id'],
            having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
        })

    }

}

module.exports = TurmasServices