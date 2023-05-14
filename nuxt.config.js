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

      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://warm-sable-30cd1b.netlify.app/',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Dual-language, activity-focused, Hometown Tax platform for foreigners and Japanese',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'Website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://vmo-lux2-bucket.s3.ap-northeast-1.amazonaws.com/files/chung3%40gmail.com/banner_settings/1680661787_anh-2560x1440-chat-luong-cao_015332449_bYKQCaHi.jpg',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Furusato Japan',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '2560',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '1440',
      },
      {
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/jpeg',
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
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
    API_URL: 'http://localhost:8000',
  },
}
