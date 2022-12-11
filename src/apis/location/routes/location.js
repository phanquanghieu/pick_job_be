module.exports = {
  find: {
    method: 'GET',
    path: '/locations',
    handler: 'api.location.location.find',
    middlewares: ['global.remove_include'],
  },

  findOne: {
    method: 'GET',
    path: '/locations/:id',
    handler: 'api.location.location.findOne',
    middlewares: ['global.remove_include'],
  },
}
