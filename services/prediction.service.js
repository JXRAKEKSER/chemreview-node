const axios = require('axios');

const predictFromSmiles = async (smiles) => {
	try {
		const predictedValue = await axios.post(
			'http://0.0.0.0:8002/predict/smiles',
			{ smiles }
		);
		console.log(predictedValue);
		return predictedValue.data;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	predictFromSmiles,
};
