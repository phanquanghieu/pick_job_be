module.exports = {
  async find(query) {
    return await hentity.entityQuery('job').find(query)
  },

  async count(query) {
    return await hentity.entityQuery('job').count(query)
  },

  async findOne(id, query) {
    return await hentity.entityQuery('job').findOne(id, query)
  },

  async create(data, company) {
    const job = await hentity.entityQuery('job').create(data)
    company.addJob(job)
    return job
  },

  async update(id, data) {
    return await hentity.entityQuery('job').update(id, data)
  },

  async delete(id) {
    return await hentity.entityQuery('job').delete(id)
  },
}
