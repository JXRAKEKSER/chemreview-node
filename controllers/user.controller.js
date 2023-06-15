const { createUser, loginUser } = require('../services/user.service');

const createUserController = async (req, res, next) => {
	try {
		const { email } = await createUser(req.body);
		return res.status(201).json({ email });
	} catch (error) {
		console.log(error);
	}
};

const loginUserController = async (req, res, next) => {
	try {
		const jwt = await loginUser(req.body);
		return res.status(200).json({ jwt });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createUserController,
	loginUserController,
};
