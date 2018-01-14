module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog-website',
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
      ['/users', { target: 'http://localhost:3000' }],
      ['/articles', { target: 'http://localhost:3000' }],
      ['/categories', { target: 'http://localhost:3000' }]
  ]
}
