module.exports = {
  find: {
    method: 'GET',
    path: '/salaries',
    handler: 'api.salary.salary.find',
    middlewares: ['global.remove_include'],
  },

  findOne: {
    method: 'GET',
    path: '/salaries/:id',
    handler: 'api.salary.salary.findOne',
    middlewares: ['global.remove_include'],
  },
}
