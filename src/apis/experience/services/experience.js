module.exports = {
  async find(query) {
    return await hentity.entityQuery('experience').find(query)
  },

  async findOne(id, query) {
    return await hentity.entityQuery('experience').findOne(id, query)
  },
}
