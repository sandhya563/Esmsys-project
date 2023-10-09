const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(token, 'your-secret-key', (err, user) => {
      console.log(user, "user");
      if (err) {
        console.log(err,"err");
        return res.status(403).json({ message: 'Forbidden' });
      }
      req.Email = Email;
      next();
    });
  };
  module.exports = {authenticateJWT}