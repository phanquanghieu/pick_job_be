const { set, isEmpty } = require('lodash')

module.exports = {
  async findByCompany(req, res) {
    let { query } = req
    const company = await req.state.user.getCompany()
    set(query, 'include', [
      { association: 'job', where: { __company_id: company.id } },
      { association: 'user', include: 'file_cv' },
    ])
    const result = await hentity.services.api.applied_job.applied_job.find(query)
    res.ok(result)
  },

  async findByUser(req, res) {
    let { query } = req
    set(query, 'where.__user_id', req.state.user.id)
    set(query, 'include', { association: 'job', include: { all: true } })
    const result = await hentity.services.api.applied_job.applied_job.find(query)
    res.ok(result)
  },

  async checkApplied(req, res) {
    const { job_id } = req.params
    let query = {
      where: {
        __user_id: req.state.user.id,
        __job_id: job_id,
      },
    }
    const result = await hentity.services.api.applied_job.applied_job.find(query)
    res.ok(Boolean(result[0]))
  },

  async apply(req, res) {
    let { body: data } = req
    const check = await hentity.services.api.applied_job.applied_job.find({
      where: {
        __user_id: req.state.user.id,
        __job_id: data.job_id,
      },
    })
    if (!isEmpty(check)) return res.ok(h.cErr('Applied'))
    data = {
      applied_at: new Date(),
      user: req.state.user.id,
      job: data.job_id,
    }
    const result = await hentity.services.api.applied_job.applied_job.create(data)
    res.ok(result)
  },
}
