const mongoose = require("mongoose");

// Your MongoDB connection URI
const con = 'mongodb+srv://luandanuredini2000:fbGnIwp26D7SrmVi@cluster0.m62lumh.mongodb.net/LMS-LN?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    // Connect using the con variable, without deprecated options
    const conn = await mongoose.connect(con, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
