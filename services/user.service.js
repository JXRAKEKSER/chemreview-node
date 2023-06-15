const User = require('../models/User');
const bcrypt = require('bcrypt');
const { getToken } = require('../utils/authUtils');

const createUser = async ({ email, password }) => {
	try {
		await User.validateEmail(email);
		const hashPassword = await bcrypt.hash(password, 7);
		const user = await User.create({ email, password: hashPassword });
		return user;
	} catch (error) {
		throw error;
	}
};

const loginUser = async ({ email, password }) => {
	try {
		const user = await User.findUserByCredentials(email, password);
		const jwtToken = getToken({ _id: user._id });
		return jwtToken;
	} catch (e) {
		throw e;
	}
};

module.exports = {
	createUser,
	loginUser,
};
