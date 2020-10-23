import Disciplina from "../models/Disciplina";

class DisciplinaController {
	async index(req, res) {
		try {
			const disciplinas = await Disciplina.find();

			return res.status(200).json(disciplinas);
		} catch (error) {
			return res.status(500).json({ message: `Erro no servidor! ${error}` });
		}
	}
	async store(req, res) {
		const { codigo, turma } = req.body; //identificadores únicos de uma disciplina

		const hasDisciplina = await Disciplina.findOne({
			codigo: codigo,
			turma: turma
		});

		if (hasDisciplina) {
			return res
				.status(409)
				.json({ message: "Já existe uma disciplina com o código informado" });
		}

		try {
			const disciplina = await Disciplina.create(req.body);

			return res.status(201).json(disciplina);
		} catch (error) {
			if (error.name == 'ValidationError') {
				return res.status(400).json({ message: `Dados com formato incorreto. ${error}` });
			}
			return res.status(500).json({ message: `Erro no servidor! ${error}` });
		}
	}

	async update(req, res) {
		const { id } = req.params;

		try {
			const disciplinaToUpdate = await Disciplina.findOne({
				id: id,
			});

			if (!disciplinaToUpdate) {
				return res
					.status(404)
					.json({ message: `Não existe disciplina com o ID ${id}.` });
			}

			await Disciplina.updateOne({ id: id }, req.body)

			return res.status(200).json({ message: "Disciplina atualizada com sucesso!" });
		} catch (error) {
			if (error.name == 'CastError') {
				return res.status(400).json({ message: "O ID inserido não está no formato de valor inteiro" });
			}
			return res.status(500).json({ message: `Erro no servidor! ${error}` });
		}
	}
	async delete(req, res) {
		const { id } = req.params;

		try {
			const disciplinaToDelete = await Disciplina.findOne({
				id: id,
			});

			if (!disciplinaToDelete) {
				return res
					.status(404)
					.json({ message: `Não existe disciplina com o ID ${id}.` });
			}

			await Disciplina.deleteOne({ id: id });
			return res.json({ message: "Disciplina excluída!" });
		} catch (error) {
			if (error.name == 'CastError') {
				return res.status(400).json({ message: "O ID inserido não está no formato de valor inteiro" });
			}
			return res.status(500).json({ message: `Erro no servidor! ${error}` });
		}
	}
}

export default new DisciplinaController();