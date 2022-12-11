module.exports = {
  profile: {
    method: 'GET',
    path: '/users/profile',
    handler: 'api.user.user.profile',
    middlewares: [],
  },

  updateProfile: {
    method: 'POST',
    path: '/users/profile',
    handler: 'api.user.user.updateProfile',
    middlewares: [],
  },
}
