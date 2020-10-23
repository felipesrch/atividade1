import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

import conn from "../../config/dbConnection";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const disciplinaSchema = new mongoose.Schema(
	{
		codigo: {
			type: Number,
			required: true,
		},
		nome: {
			type: String,
			required: true,
		},
		turma: {
			type: String,
			required: true,
		},
		professor: {
			type: String,
			required: false,
		},
		departamento: {
			type: String,
			required: true,
		},
		qtdCretidos: {
			type: Number,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

disciplinaSchema.plugin(autoIncrement.plugin, {
	model: "Disciplina",
	field: "id",
	startAt: 1,
	incrementBy: 1,
});

export default mongoose.model("Disciplina", disciplinaSchema);