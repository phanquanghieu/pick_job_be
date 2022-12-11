module.exports = {
  find: {
    method: 'GET',
    path: '/areas',
    handler: 'api.area.area.find',
    middlewares: ['global.remove_include'],
  },

  findOne: {
    method: 'GET',
    path: '/areas/:id',
    handler: 'api.area.area.findOne',
    middlewares: ['global.remove_include'],
  },
}
