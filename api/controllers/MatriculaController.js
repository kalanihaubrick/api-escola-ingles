const { MatriculasServices } = require('../services')
const matriculasServices = new MatriculasServices();

class MatriculaController {
    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params
        try {
            const todasAsMatriculas = await matriculasServices.encontraEContaRegistros({
                turma_id: Number(turmaId),
                status: "confirmado"
            }, {
                // para limitar as buscas no banco
                limit: 20,
                //para order a busca, primeiro parametro a coluna e o segundo se é ascendente (ASC) ou descendente (DESC)
                order: [['estudante_id', 'DESC']]
            })
            return res.status(200).json(todasAsMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async apagaMatricula(req, res) {
        const { matriculaId } = req.params
        try {
            await matriculasServices.apagaRegistro(Number(matriculaId))
            return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const pessoa = await matriculasServices.pegaUmRegistro(Number(estudanteId))
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body

        try {
            await matriculasServices.atualizaRegistros(novasInfos,
                {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }

            )
            const matriculaAtualizada = await matriculasServices.pegaUmRegistro(Number(matriculaId))
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const umaMatricula = await matriculasServices.pegaUmaMatricula(estudanteId, matriculaId)
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const novaMatriculaCriada = await matriculasServices.criaRegistro(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}



module.exports = MatriculaController;