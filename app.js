const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const multipartFormParser = multer();

// роутеры
const userRouter = require('./routes/user.router');
const predictionRouter = require('./routes/prediction.router');

app.use(express.json());
app.use(multipartFormParser.single('file'));

app.post('/predict/file', async (req, res) => {
	//console.log(req.file);
	/* 	const { buffer, originalname } = req.file;
	const createdFilePath = `${__dirname}/tmpFiles/${originalname}${Date.now()}`;
	await fs.promises.writeFile(createdFilePath, buffer);

	const formConstructor = new FormData();
	formConstructor.append('file', fs.createReadStream(createdFilePath));
	const result = await axios.post(
		' http://0.0.0.0:8002/predict/file',
		formConstructor
	);
	await fs.promises.unlink(createdFilePath);
	console.log(result.data); */
	return res.json({ result: 'not implemented' });
});

app.use('/users', userRouter);
app.use('/predict', predictionRouter);

const start = async () => {
	try {
		app.listen(8001, () => console.log('Server start on port 8000'));
		await mongoose.connect('mongodb://localhost:27017/webChemReview');
	} catch (error) {
		console.log(error);
	}
};

start();
