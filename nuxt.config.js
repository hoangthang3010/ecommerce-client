export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecommerce-client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.css', '~/assets/scss/app.scss', '~/assets/fonts/stylesheet.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios', '~/plugins/element-ui.js', '~/plugins/vue-agile', '~/plugins/on-scroll.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/layouts', extensions: ['vue'] },
    { path: '~/components/common', extensions: ['vue'] },
    { path: '~/components/common/ui', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  styleResources: {
    scss: ['~assets/scss/_var.scss'],
    // hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },
  auth: {
    localStorage: false,
    cookie: {
      options: {
        maxAge: 60 * 60 * 24 * 30,
      },
    },
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          global: true,
          // required: false,
          type: 'Bearer',
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: `https://lux2-api-dev.lux.vmo.group/api/v1/login`,
            method: 'post',
          },
          logout: {
            url: `https://lux2-api-dev.lux.vmo.group/api/v1/logout`,
            method: 'post',
          },
          user: {
            url: `https://lux2-api-dev.lux.vmo.group/api/v1/profile`,
            method: 'get',
          },
        },
      },
    },
    plugins: [
      { src: '~/plugins/auth.js', ssr: false },
      { src: '~/plugins/nuxt-auth-local.js' },
      { src: '~/filters/index.js' },
    ],
    redirect: {
      login: '/login',
      callback: false,
      home: '/',
    },
  },
  publicRuntimeConfig: {
    API_URL: 'https://644642730431e885f00d1847.mockapi.io/api/v1',
  },
}
