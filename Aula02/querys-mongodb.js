use fiap

db.createCollection('unicorns')

db.unicorns.find()
db.unicorns.find({vampires: {$exists: true}})
db.unicorns.find({vampires: {$exists: false}})

db.unicorns.find({loves: {$eq: "carrot"}})
db.unicorns.find({loves: {$in: ["carrot","apple"]}})
db.unicorns.find({name: {$in: ["carrot","apple"]}})

db.unicorns.find({name: {$regex: "^[R|r]o+dles$"}})

//inclusão
db.unicorns.find({loves: {$eq: "carrot"}}, {/*Projection*/ name: true, weight: true, _id: false})

//exclusão
db.unicorns.find({loves: {$eq: "carrot"}}, {/*Projection*/ loves:false})

db.unicorns.update({name: {$eq:"Raleigh"}}, {$set: {vampires: 12}})

db.unicorns.update({name: {$eq:"Raleigh"}}, {inc: {vampires: 12}})

//remove o primeiro elemento do atributo lista
db.unicorns.update({name: {$eq:"Raleigh"}}, {$pop: {loves: "chocolate"}})

db.unicorns.update({weight: {$gt:600}}, {$inc: {weight: -10}}, {multi: true})

db.unicorns.update({name: {$eq: "Uni"}}, {$inc: {vampires: 100}}, {upsert: true})

// Ordenar
db.unicorns.find({
  vampires: {$exists: true}
}).sort({vampires:1}).limit(3)






