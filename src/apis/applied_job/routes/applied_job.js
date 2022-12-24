module.exports = {
  findByCompany: {
    method: 'GET',
    path: '/applied_jobs/company',
    handler: 'api.applied_job.applied_job.findByCompany',
    middlewares: [],
  },

  findByUser: {
    method: 'GET',
    path: '/applied_jobs/user',
    handler: 'api.applied_job.applied_job.findByUser',
    middlewares: [],
  },

  checkApplied: {
    method: 'GET',
    path: '/applied_jobs/check/:job_id',
    handler: 'api.applied_job.applied_job.checkApplied',
    middlewares: [],
  },

  apply: {
    method: 'POST',
    path: '/applied_jobs',
    handler: 'api.applied_job.applied_job.apply',
    middlewares: [],
  },
}
