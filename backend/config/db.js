const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', false);
		const conn = await mongoose.connect(process.env.MONGO_URL);
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectDB;