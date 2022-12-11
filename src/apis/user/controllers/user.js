const { pick } = require('lodash')

module.exports = {
  async profile(req, res) {
    const user = req.state.user
    const result = await h.query.user.findOne({ where: { id: user.id }, include: ['file_cv'] })
    res.ok(result)
  },

  async updateProfile(req, res) {
    const body = req.body
    const user = req.state.user
    const result = await h.query.user.update(
      pick(body, ['full_name', 'gender', 'birthday', '__file_id']),
      { where: { id: user.id } }
    )
    res.ok(result)
  },
}
