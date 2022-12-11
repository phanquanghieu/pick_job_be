module.exports = {
  async find(query) {
    return await hentity.entityQuery('area').find(query)
  },

  async findOne(id, query) {
    return await hentity.entityQuery('area').findOne(id, query)
  },
}
