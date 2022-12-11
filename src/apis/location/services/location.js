module.exports = {
  async find(query) {
    return await hentity.entityQuery('location').find(query)
  },

  async findOne(id, query) {
    return await hentity.entityQuery('location').findOne(id, query)
  },
}
