const schemas = require('./schemas');

const validateUser = ({ email, displayName, password }) => {
    const emailValidate = schemas.emailSchema.validate(email);
    if (emailValidate.error) {
        return { type: 'INVALID_EMAIL', message: '"email" must be a valid email' };
    }

    const displayNameValidate = schemas.displayNameSchema.validate(displayName);
    if (displayNameValidate.error) {
        return { type: 'INVALID_NAME',
            message: '"displayName" length must be at least 8 characters long' }; 
    }

    const passwordValidate = schemas.passwordSchema.validate(password);
    if (passwordValidate.error) {
        return {
            type: 'INVALID_PASSWORD',
            message: '"password" length must be at least 6 characters long',
        };
    }

    return { type: null, message: '' };
};

module.exports = {
    validateUser,
};