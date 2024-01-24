const validateAuthToken = require("../utils/authTokenValidator");

module.exports = (req, res, next) => {
  const authToken = req.headers.authorization;

  console.log('Received Auth Token:', authToken);

  if (authToken && authToken.startsWith('Bearer ')) {
    const isValidToken = validateAuthToken(authToken.slice(7));
    if (isValidToken) {
      next();
    } else {
      res.status(401).send('Unauthorized - Invalid token');
    }
  } else {
    res.status(401).send('Unauthorized - Login required');
  }
};
