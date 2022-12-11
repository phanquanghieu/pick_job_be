module.exports = {
  async find(req, res) {
    const { query } = req
    const result = await hentity.services.api.area.area.find(query)
    res.ok(result)
  },

  async findOne(req, res) {
    const { id } = req.params
    const { query } = req
    const result = await hentity.services.api.area.area.findOne(id, query)
    res.ok(result)
  },
}
