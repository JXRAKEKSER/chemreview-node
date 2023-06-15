const { Schema, model } = require('mongoose');

const PredictonSchema = new Schema({
	drug: { type: String, required: true },
	predictedValue: { type: Number, required: true },
});

module.exports = model('Predicton', PredictonSchema);
