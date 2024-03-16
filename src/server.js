const express = require('express');
const connectDB = require('./config/dbConfig');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors')

const app = express();

// Connect to MongoDB database
connectDB();

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/Products', productRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
