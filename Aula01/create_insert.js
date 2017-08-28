use fiap;

db.aluno.insert({
	nome: "Magarida",
	sobrenome: "Flores",
	rm: 12345,
	nasc: new Date(1995, 0, 1),
	novo: false,
	genero: 'f',
	cuso: "TDS",
	endereco: {
	 	logradouro: "Rua madre marie bernadine" ,
	 	numero: 224,
	 	cep: "084320-420",
	 	cidade: "São João da Boa Bista",
	 	estado: "SP"
	},
	telefones: ["1196441-0037"]
})

db.aluno.insert({data: new Date(2000, 09, 01)});