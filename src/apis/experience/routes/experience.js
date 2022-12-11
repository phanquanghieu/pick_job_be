module.exports = {
  find: {
    method: 'GET',
    path: '/experiences',
    handler: 'api.experience.experience.find',
    middlewares: ['global.remove_include'],
  },

  findOne: {
    method: 'GET',
    path: '/experiences/:id',
    handler: 'api.experience.experience.findOne',
    middlewares: ['global.remove_include'],
  },
}
