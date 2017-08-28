//EX 1
use cadastro

//EX 2
db.clientes.ensureIndex({nome:1})
db.clientes.ensureIndex({cpf:1})

//EX 3
db.clientes.insert({
 	nome:"Vinicius",
 	nasc: new Date(1997,11,29),
 	endereco:{
 	  logradouro: "Rua silvianópolis",
 	  numero:275,
 	  cep: "08420-680",
 	  cidade: "São Paulo"
 	}, 
 	cpf: "123.456.789-10"
})

//EX 4.1
db.clientes.find({cpf: {$regex: "123."}})
db.clientes.find({cpf: {$gt: "111.", $lt: "133"}})

//EX 4.2
db.clientes.find({nasc: {$lt: new Date(1999, 0, 1)}})