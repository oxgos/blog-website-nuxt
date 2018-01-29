const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ochai个人博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/css/reset.css'
  ],
  extendRoutes (routes) {
    routes.push({
      name: 'custom',
      path: '*',
      component: resolve(__dirname, 'pages/index.vue')
    })
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Dev configuration
  */
  dev: {
    extend (config, { isDev, isClient }) {
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
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
  modules: [
      '@nuxtjs/proxy'
  ],
  proxy: [
    ['/feUser', { target: 'http://localhost:3000' }],
    ['/feArticles', { target: 'http://localhost:3000' }],
    ['/feCategories', { target: 'http://localhost:3000' }],
    ['/upload', { target: 'http://localhost:3000' }]
  ]
}
