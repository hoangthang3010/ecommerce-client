export default async ({ $auth, $userInstance, $userInstanceNotRedirect, store }) => {
  $auth.onRedirect((to) => {
    if ($auth.loggedIn) {
      $userInstance.defaults.headers.common.Authorization = $auth.strategy.token.get()
      $userInstanceNotRedirect.defaults.headers.common.Authorization = $auth.strategy.token.get()
    }

    if ($auth.loggedIn && $auth.$state.user.status === 'new') {
      return '/profile'
    }

    if ($auth.loggedIn && store.state.previousUrl) {
      const previousUrl = store.state.previousUrl
      store.commit('setPreviousUrl', null)
      return previousUrl
    }

    return to
  })

  if (!$auth.loggedIn || $auth.$state.strategy !== 'local') {
    return
  }

  // set access token to header of user instance axios
  $userInstance.defaults.headers.common.Authorization = $auth.strategy.token.get()
  $userInstanceNotRedirect.defaults.headers.common.Authorization = $auth.strategy.token.get()
}
