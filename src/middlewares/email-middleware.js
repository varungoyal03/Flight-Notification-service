const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateEmailRequest(req, res, next) {
    const { subject, content, recepientEmail } = req.body;

    if (!subject) {
        const error = { ...ErrorResponse };
        error.message = 'Something went wrong while creating email ticket';
        error.error = new AppError(
            ['Subject not found in the incoming request in the correct form'],
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(error);
    }

    if (!content) {
        const error = { ...ErrorResponse };
        error.message = 'Something went wrong while creating email ticket';
        error.error = new AppError(
            ['Content not found in the incoming request in the correct form'],
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(error);
    }

    if (!recepientEmail) {
        const error = { ...ErrorResponse };
        error.message = 'Something went wrong while creating email ticket';
        error.error = new AppError(
            ['Recipient email not found in the incoming request in the correct form'],
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(error);
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recepientEmail)) {
        const error = { ...ErrorResponse };
        error.message = 'Something went wrong while creating email ticket';
        error.error = new AppError(
            ['Recipient email is not in valid format'],
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(error);
    }

    next();
}

module.exports = {
    validateCreateEmailRequest
}
