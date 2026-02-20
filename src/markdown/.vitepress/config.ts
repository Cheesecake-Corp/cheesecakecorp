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
        '/czech/': [
          { text: 'Čeština', 
            items: [
              { text: 'Literatura obecně', link: '/czech/literatura' },
              { text: 'Neevropské literární památky (starověk)', link: '/czech/starovek/starovek' },
            ]
          }
        ],
        '/czech/starovek/': [
          { 
            text: '<- Literatura',
            link: '/czech/literatura'
          },
          { text: 'Neevropské literární památky (starověk)', link: '/czech/starovek/starovek' },
          { text: 'Mezopotámie', link: '/czech/starovek/mezopotamie' },
          { text: 'Sumerská literatura', link: '/czech/starovek/sumerska_literatura' },
          { text: 'Egypt', link: '/czech/starovek/egypt' },
          { text: 'Indie', link: '/czech/starovek/indie' },
          { text: 'Čína', link: '/czech/starovek/cina' },
          { text: 'Hebrejská literatura', link: '/czech/starovek/hebrejska_literatura' },
          { text: 'Antická literatura', link: '/czech/starovek/anticka_literatura', 
            items: [
              { text: 'Řecká literatura', link: '/czech/starovek/recko/recko' },
              { text: 'Římská literatura', link: '/czech/starovek/rim/rim' }
            ] 
          },
            
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
        ],
        '/czech/starovek/rim': [
            {text: '<- Antická literatura', link: '/czech/starovek/anticka_literatura'},
            {text: 'Římská literatura', link: '/czech/starovek/rim'}
        ],
        'czech/starovek/recko': [

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
