const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Documentación web',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2E4053' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Vue Js',
        link: '/vuejs/',
      },
      {
        text: 'React Js',
        link: '/reactjs/'
      },
      {
        text: 'Util',
        link: '/utiljs/'
      },
      
    ],
    sidebar: {
      '/vuejs/': [
        {
          title: 'Vue',
          collapsable: false,
          children: [
            '',
            'estructura'
          ]
        }
      ],

      '/reactjs/': [
        {
          title: 'React',
          collapsable: false,
          children: [
            '',
            'first'
          ]
        }
      ],
      
      '/utiljs/': [
        {
          title: 'Util',
          collapsable: false,
          children: [
            '',
            'console',
            'eslint',
            'markdown' 
          ]
        }
      ],
      
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-register-components',
    '@vuepress/plugin-active-header-links',
    '@vuepress/plugin-search',
    '@vuepress/plugin-nprogress'
  ]
}
