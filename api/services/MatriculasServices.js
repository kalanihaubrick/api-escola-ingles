const Services = require('./Services')
const database = require('../models')

class MatriculasServices extends Services {
    constructor() {
        super('Matriculas')
    }

    async pegaUmaMatricula(estudanteId, matriculaId) {
        return database[this.nomeDoModelo].findOne({
            where: {
                id: matriculaId,
                estudante_id: estudanteId
            }
        })
    }

    async pegaUmaMatriculasPorTurma(id) {
        return database[this.nomeDoModelo].findAndCountAll({
            where: {
                turma_id: id,
                status: "confirmado"
            }
        })
    }

    
}

module.exports = MatriculasServices