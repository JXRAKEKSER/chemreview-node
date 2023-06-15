const { predictFromSmiles } = require('../services/prediction.service');

const getPredictionFromSmiles = async (req, res) => {
	try {
		const { smiles } = req.body;
		const predictedValue = await predictFromSmiles(smiles);
		console.log(predictedValue);
		return res.status(200).json(predictedValue);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getPredictionFromSmiles,
};
