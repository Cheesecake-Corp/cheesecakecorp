import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cheesecake Corp MD DB",
  description: "Database of Cheesecake Corp's MDs",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'index' },
      { text: 'Čeština', link: '/czech/literatura' },

    ],

    sidebar: {
      
        '/czech/': [
          { text: 'Čeština', 
            items: [
              { text: 'Literatura', link: '/czech/literatura' }]
          }
        ]
      
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown:{
    math: true,
    toc: true
  }
})
