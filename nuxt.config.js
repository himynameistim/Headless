export default {
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt + Prismic",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt + Prismic showcase"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
  '~/assets/scss/themes/global/css/1.0-bootstrap.min.css',
  '~/assets/scss/themes/global/css/2.0-swiper.css',
  '~/assets/scss/themes/innovate_uk/scss/01-atoms/0.3-global.scss',
  '~/assets/scss/themes/innovate_uk/scss/01-atoms/0.4-buttons.scss',
  '~/assets/scss/themes/innovate_uk/scss/01-atoms/0.5-form-fields.scss',
  '~/assets/scss/themes/innovate_uk/scss/02-organism/0.1-global.scss',
  '~/assets/scss/themes/innovate_uk/scss/02-organism/0.2-nav.scss',
  '~/assets/scss/themes/innovate_uk/scss/02-organism/0.3-footer.scss',
  '~/assets/scss/themes/innovate_uk/scss/03-components/01-stats.scss',],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/prismicLinks", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    // https://prismic-nuxt.js.org/
    "@nuxtjs/prismic"
  ],

  prismic: {
    endpoint: "https://ibvademo.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias["vue"] = "vue/dist/vue.common";
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },

  generate: {
    fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA
  },

  styleResources: {
    scss: [
        '~/assets/scss/themes/global/css/0.0-custom-variables.scss',
        '~/assets/scss/themes/innovate_uk/scss/01-atoms/0.2-typography.scss',
    ]
}
};
