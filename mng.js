const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/tanyacart');
}

const kittySchema = new mongoose.Schema({
    name: String
  });

const docKitten = mongoose.model('Kitten', kittySchema);

const silence = new docKitten({ 
    name: 'billi' 
    });
console.log(silence.name); 

silence.save();
 