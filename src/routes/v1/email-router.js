const express = require('express');

const { EmailController } = require('../../controllers');
const {EmailMiddleware} = require('../../middlewares');

const router = express.Router();

router.post('/', EmailMiddleware.validateCreateEmailRequest, EmailController.create);
module.exports = router;