require('dotenv').config();
require('colors');

const express = require('express');
const port = process.env.PORT || 5000;
const errorHandler = require('./helpers/middlewares/errorHandler');
const app = express();

const connectDB = require('./config/db');
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/goals/v1', require('./routes/goalRoutes'));
app.use('/api/users/v1', require('./routes/userRoutes'));

app.use(errorHandler);
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});