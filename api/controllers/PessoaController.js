const { PessoasServices } = require('../services')
const pessoasServices = new PessoasServices();

class PessoaController {
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos()
            return res.status(200).json(pessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaTodosEmails(req, res) {
        try {
            const todosEmails = await pessoasServices.pegaTodosOsRegistros({ attributes: ['nome', 'email'] })
            return res.status(200).json(todosEmails);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await pessoasServices.pegaUmRegistroScopo(Number(id))
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;

        try {
            const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await pessoasServices.atualizaRegistroScopo(novasInfos, id)
            const pessoaAtualizada = await pessoasServices.pegaUmRegistroScopo(Number(id))
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cancelaPessoa(req, res) {
        const { estudanteId } = req.params;

        try {
            await pessoasServices.cancelaPessoasEMatriculas(Number(estudanteId))
            return res.status(200).json({ message: `Matrículas referente ao estudante ${estudanteId} canceladas` })

        } catch (error) {
            res.status(500).json(error.message)

        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params

        try {
            await pessoasServices.apagaRegistro(id)
            return res.status(200).json({ message: `id ${id} apagado.` })
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
  
    static async restauraPessoa(req, res) {
        const { id } = req.params

        try {
            await pessoasServices.restauraRegistro(id)
            return res.status(200).json({ message: `id ${id} restaurado.` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTurmasLotadas(req, res) {
        const lotacaoTurma = 2;

        try {
            const turmasLotadas = await matriculasServices.pegaUmaMatriculasPorTurma(lotacaoTurma)
            return res.status(200).json(turmasLotadas.count)
        } catch (error) {
            res.status(500).json(error.message)

        }
    }



}

module.exports = PessoaController