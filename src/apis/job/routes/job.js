module.exports = {
  find: {
    method: 'GET',
    path: '/jobs',
    handler: 'api.job.job.find',
    middlewares: [],
  },

  count: {
    method: 'GET',
    path: '/jobs/count',
    handler: 'api.job.job.count',
    middlewares: [],
  },

  findOne: {
    method: 'GET',
    path: '/jobs/:id',
    handler: 'api.job.job.findOne',
    middlewares: [],
  },

  create: {
    method: 'POST',
    path: '/jobs',
    handler: 'api.job.job.create',
    middlewares: ['api.job.get_user_company'],
  },

  update: {
    method: 'PUT',
    path: '/jobs/:id',
    handler: 'api.job.job.update',
    middlewares: ['api.job.get_user_company', 'api.job.auth_company_job'],
  },

  delete: {
    method: 'DELETE',
    path: '/jobs/:id',
    handler: 'api.job.job.delete',
    middlewares: ['api.job.get_user_company', 'api.job.auth_company_job'],
  },
}
