
//db.unicorns.find({gender: {$eq:"f"}});

db.unicorns.find({
  weight: {$gt: 500},
  gender: "m"
 });
 
 db.unicorns.find({
   vampires: {$exists: false}
 });
 
 db.unicorns.find({
   	loves: "carrot"
 })
 
  db.unicorns.find({
   	loves: {$in: ["carrot", "apple"]}
 })
 
 db.unicorns.find({
   	$and: [{loves:{$eq:"carrot"}}, {loves:{$eq:"apple"}}]
 })
 

