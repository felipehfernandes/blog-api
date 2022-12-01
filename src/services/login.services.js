const { User } = require('../models');
const { createToken } = require('../auth/jsonWebFunc');

const login = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    
    if (!user) {
        return {
        type: 'INVALID_FIELDS',
        message: 'Invalid fields',
        };
    }
    
    const {
        password: _password,
        ...payload
    } = user.dataValues;

    const token = createToken(payload);
    
    return { token };
};

module.exports = {
    login,
};