module.exports = async (req, res, next) => {
  const { company } = req.state
  const { id } = req.params
  if (!(await company.hasJob(id))) return res.forbidden("The company doesn't have this Job")
  next()
}
