module.exports = {
  async find(query) {
    return await hentity.entityQuery('salary').find(query)
  },

  async findOne(id, query) {
    return await hentity.entityQuery('salary').findOne(id, query)
  },
}
