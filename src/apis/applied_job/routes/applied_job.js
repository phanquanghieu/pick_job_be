module.exports = {
  find: {
    method: 'GET',
    path: '/applied_jobs',
    handler: 'api.applied_job.applied_job.find',
    middlewares: [],
  },

  findOne: {
    method: 'GET',
    path: '/applied_jobs/:id',
    handler: 'api.applied_job.applied_job.findOne',
    middlewares: [],
  },

  create: {
    method: 'POST',
    path: '/applied_jobs',
    handler: 'api.applied_job.applied_job.create',
    middlewares: [],
  },

  update: {
    method: 'PUT',
    path: '/applied_jobs/:id',
    handler: 'api.applied_job.applied_job.update',
    middlewares: [],
  },

  delete: {
    method: 'DELETE',
    path: '/applied_jobs/:id',
    handler: 'api.applied_job.applied_job.delete',
    middlewares: [],
  },
}
