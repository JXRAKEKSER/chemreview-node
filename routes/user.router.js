const { Router } = require('express');

const {
	createUserController,
	loginUserController,
} = require('../controllers/user.controller');

const router = new Router();

router.post('/signup', createUserController);
router.post('/signin', loginUserController);

module.exports = router;
