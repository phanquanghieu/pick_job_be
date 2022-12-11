module.exports = {
  async find(req, res) {
    const { query } = req
    const result = await hentity.services.api.salary.salary.find(query)
    res.ok(result)
  },

  async findOne(req, res) {
    const { id } = req.params
    const { query } = req
    const result = await hentity.services.api.salary.salary.findOne(id, query)
    res.ok(result)
  },
}
