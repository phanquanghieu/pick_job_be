module.exports = {
  async find(req, res) {
    const { query } = req
    const result = await hentity.services.api.company.company.find(query)
    res.ok(result)
  },

  async findOne(req, res) {
    const { id } = req.params
    const { query } = req
    const result = await hentity.services.api.company.company.findOne(id, query)
    res.ok(result)
  },

  async upsert(req, res) {
    const { body: data } = req
    const { user } = req.state
    let company = await user.getCompany()
    console.log(company)

    if (!company) {
      company = await hentity.services.api.company.company.create(data)
      user.setCompany(company)
    } else {
      await hentity.services.api.company.company.update(company.id, data)
    }
    res.ok(company)
  },
}
