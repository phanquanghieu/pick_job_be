module.exports = {
  async find(query) {
    return await hentity.entityQuery('applied_job').find(query)
  },

  async findOne(id, query) {
    return await hentity.entityQuery('applied_job').findOne(id, query)
  },

  async create(data) {
    return await hentity.entityQuery('applied_job').create(data)
  },

  async update(id, data) {
    return await hentity.entityQuery('applied_job').update(id, data)
  },

  async delete(id) {
    return await hentity.entityQuery('applied_job').delete(id)
  },
}
