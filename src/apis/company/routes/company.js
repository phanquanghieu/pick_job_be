module.exports = {
  find: {
    method: 'GET',
    path: '/companies',
    handler: 'api.company.company.find',
    middlewares: [],
  },

  findOne: {
    method: 'GET',
    path: '/companies/:id',
    handler: 'api.company.company.findOne',
    middlewares: [],
  },

  upsert: {
    method: 'POST',
    path: '/companies',
    handler: 'api.company.company.upsert',
    middlewares: [],
  },
}
