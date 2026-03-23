const mongoose = require('mongoose');

// Función que establece la conexión con la base de datos MongoDB Atlas
const connectDatabase = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/pelisdigitales';
    await mongoose.connect(mongoUri);
    console.log('✅ Conexión exitosa a la base de datos MongoDB (Atlas/Local)');
  } catch (error) {
    console.error('❌ Error fatal al conectar a la base de datos:', error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;