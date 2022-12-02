const jwToken = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
    expiresIn: '30min',
    algorithm: 'HS256',
};

const createToken = (payload) => {
    const token = jwToken.sign({ data: payload }, secret, jwtConfig);
    return token;
};

const verifyToken = (token) => {
    try {
        const decoded = jwToken.verify(token, secret);
        return decoded;
    } catch (err) {
        return {
            isError: true,
            err,
        };
    }
};

module.exports = {
    createToken,
    verifyToken,
};