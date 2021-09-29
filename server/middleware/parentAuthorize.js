
const is_parent = (req, res, next) => {
    if (req.user && req.user.is_parent) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Parent Token' });
    }
  };

module.exports = is_parent;
