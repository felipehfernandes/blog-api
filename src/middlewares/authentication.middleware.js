const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'secret';

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    
    try {
        const decoded = jwt.verify(token, secret);
        req.decoded = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};