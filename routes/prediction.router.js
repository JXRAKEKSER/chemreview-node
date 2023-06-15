const { Router } = require('express');

const {
	getPredictionFromSmiles,
} = require('../controllers/prediction.controller');

const router = new Router();

router.post('/smiles', getPredictionFromSmiles);

module.exports = router;
