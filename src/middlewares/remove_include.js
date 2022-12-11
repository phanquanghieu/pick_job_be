module.exports = (req, res, next) => {
  delete req.query.include
  next()
}
