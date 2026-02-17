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
      { text: 'Fyzika', link: '/physics/physics' },

    ],

    sidebar: {
      
        '/czech/': [
          { text: 'Čeština', 
            items: [
              { text: 'Literatura obecně', link: '/czech/literatura' },
              { text: 'Neevropské literární památky (starověk)', link: '/czech/starovek' },
              { text: 'Řecká literatura', link: '/czech/recko' },
              { text: 'Římská literatura', link: '/czech/rim' },
            ]
          }
        ],
        '/czech/starovek/': [
          { 
            text: '<- Starověk',
            link: '/czech/starovek'
          },
          {
            text: 'Starověk',
            items: [
              { text: 'Mezopotámie', link: '/czech/starovek/mezopotamie' },
              { text: 'Sumerská literatura', link: '/czech/starovek/sumerska_literatura' },
              { text: 'Egypt', link: '/czech/starovek/egypt' },
              { text: 'Indie', link: '/czech/starovek/indie' },
              { text: 'Čína', link: '/czech/starovek/cina' },
              { text: 'Hebrejská literatura', link: '/czech/starovek/hebrejska_literatura' },
            ]
          }
        ],
        '/physics/': [
          {
            text: 'Magnetické pole',
            items: [
              {
                text: 'Nestacionární',
                link: '/physics/magnetic_field/nonstationary/magnetic_induction'
              }
            ]
          }
        ],
        '/physics/magnetic_field/nonstationary/': [
          {
            text: '<- Fyzika',
            link: '/physics/physics',
          },
          {
            text: 'Magnetická indukce',
            link: '/physics/magnetic_field/nonstationary/magnetic_induction'
          }
        ]
      
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cheesecake-Corp/cheesecakecorp' }
    ]
  },
  markdown:{
    math: true,
    toc: {
      level: [2, 3]
    }
  }
})
