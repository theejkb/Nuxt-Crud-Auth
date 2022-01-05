module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      },
      {
        rel: 'stylesheet prefetch',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'
      }
      , {
        rel: 'stylesheet prefetch',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap-theme.min.css'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

  axios: {
    baseURL: 'http://localhost:8080'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'users', method: 'post', propertyName: 'data.token' },
          user: { url: 'users', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  }
}
