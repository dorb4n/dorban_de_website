export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
      title: 'dorban.de - Persönliche Website von Stephan Plöhn #webdev #webdesign #gamer',
      htmlAttrs: {
          lang: 'de'
      },
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Generate Configuration
  generate: {
      fallback: true,
  },

  // PWA Configuration: https://pwa.nuxtjs.org
  pwa: {
      meta: {
          theme_color: '#ffffff', // TODO
          lang: 'de',
          ogHost: 'https://dorban.de',
      },
      manifest: {
          background_color: '#ffffff', // TODO
          display: 'standalone',
          lang: 'de',
          name: 'dorban',
          short_name: 'dorban',
          theme_color: '#ffffff', // TODO
      }
  },
}
