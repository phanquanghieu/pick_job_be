const { set } = require('lodash')

module.exports = async (req, res, next) => {
  const { company } = req.state
  set(req.query, 'where.__company_id', company.id)
  next()
}
