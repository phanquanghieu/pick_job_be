module.exports = {
  async find(query) {
    return await hentity.entityQuery('company').find(query)
  },

  async findOne(id, query) {
    return await hentity.entityQuery('company').findOne(id, query)
  },

  async create(data) {
    return await hentity.entityQuery('company').create(data)
  },

  async update(id, data) {
    return await hentity.entityQuery('company').update(id, data)
  },
}
