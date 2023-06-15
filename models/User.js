const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const UnAuthorizedError = require('../errors/UnAuthorizedError');
const ValidationError = require('../errors/ValidationError');

const UserSchema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

UserSchema.statics.validateEmail = async function (email) {
	if (validator.isEmail(email)) {
		const user = await this.findOne({ email });
		if (user) {
			throw new ValidationError(
				'Пользователь с таким именем уже существует'
			);
		}
	} else {
		throw new ValidationError("Некорректное значение поля 'email'");
	}
};
UserSchema.statics.findUserByCredentials = async function (email, password) {
	const supposeUser = await this.findOne({ email }).select('+password');
	if (!supposeUser) {
		throw new UnAuthorizedError('Неправильный email/пароль');
	}
	const matchedPassword = await bcrypt.compare(
		password,
		supposeUser.password
	);
	if (!matchedPassword) {
		throw new UnAuthorizedError('Неправильный email/пароль');
	}
	return supposeUser;
};

module.exports = model('User', UserSchema);
