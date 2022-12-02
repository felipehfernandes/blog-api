const { User } = require('../models');
const { createToken } = require('../auth/jsonWebFunc');

const validations = require('../validations/input.validations');

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

const createUser = async (reqBody) => {
    const validate = validations.validateUser(reqBody);
    if (validate.type) return validate;

    const user = await User.findOne({ where: { email: reqBody.email } });
    if (user) {
        return {
        type: 'USER_EXISTS',
        message: 'User already registered',
        };
    }

    const newUser = await User.create(reqBody);
    const {
        password: _password,
        ...payload
    } = newUser.dataValues;

    const token = createToken(payload);

    return { type: null, token };
};

const getAll = async () => {
    const users = await User.findAll();
    const incompleteUsers = users.map(({ dataValues }) => {
        const { password: _password, ...incompleteUser } = dataValues;
        return incompleteUser;
    });

    return incompleteUsers;
};

const getById = async (id) => {
    const user = await User.findByPk(Number(id));
    
    if (!user) {
        return {
        type: 'NOT_FOUND',
        message: 'User does not exist',
        };
    }

    const { password: _password, ...incompleteUser } = user.dataValues;

    return { type: null, message: incompleteUser };
};

module.exports = {
    login,
    createUser,
    getAll,
    getById,
};