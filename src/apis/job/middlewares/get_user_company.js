module.exports = async (req, res, next) => {
  let { user } = req.state
  req.state.company = await user.getCompany()
  next()
}
