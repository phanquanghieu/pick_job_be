module.exports = {
  async find(req, res) {
    const { query } = req
    const result = await hentity.services.api.job.job.find(query)
    res.ok(result)
  },

  async count(req, res) {
    const { query } = req
    const result = await hentity.services.api.job.job.count(query)
    res.ok(result)
  },

  async findOne(req, res) {
    const { id } = req.params
    const { query } = req
    const result = await hentity.services.api.job.job.findOne(id, query)
    res.ok(result)
  },

  async create(req, res) {
    const { body: data } = req
    const { company } = req.state
    const result = await hentity.services.api.job.job.create(data, company)
    res.ok(result)
  },

  async update(req, res) {
    const {
      params: { id },
      body: data,
    } = req
    const result = await hentity.services.api.job.job.update(id, data)
    res.ok(result)
  },

  async delete(req, res) {
    const { id } = req.params
    const result = await hentity.services.api.job.job.delete(id)
    res.ok(result)
  },
}
