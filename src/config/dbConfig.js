const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://reachouttofalstelo:zej6Vq1r3mjwDVGH@qr-ninja-cluster.8o128kt.mongodb.net/?retryWrites=true&w=majority&appName=qr-ninja-cluster", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
