const app = require('./app');
const dotenv = require('dotenv');
// const { sequelize } = require('./config/dbConfig');
const { connectDB } = require('./config/dbConfig');
require('./models/associations'); // Import associations

dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // Sync all models
// sequelize.sync({ alter: true }).then(() => {
//   console.log('Database & tables created!');
// });