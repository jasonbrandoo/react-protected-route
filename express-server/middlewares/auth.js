const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization.split(' ')[0] === 'Bearer') {
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      next();
    } else {
      res.status(401).json({
        message: 'no bearer',
      });
    }
  } catch (error) {
    res.status(401).json({
      error,
    });
  }
};

module.exports = auth;
