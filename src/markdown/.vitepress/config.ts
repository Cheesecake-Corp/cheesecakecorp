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
      { text: 'Biologie', link: '/biologie/biologie' },
      { text: 'Zeměpis', link: '/geography/geography' },

    ],
    sidebar: {  
      '/czech/': [
        { text: 'Čeština', 
          items: [
            { text: 'Literatura obecně', link: '/czech/literatura' },
            { text: 'Neevropské literární památky (starověk)', link: '/czech/starovek/starovek' },
            { text: 'Antická literatura', link: '/czech/starovek/anticka_literatura', 
              items: [
                { text: 'Řecká literatura', link: '/czech/starovek/recko/recko' },
                { text: 'Římská literatura', link: '/czech/starovek/rim/rim' }
              ] 
            },
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
        
          
      ],
      '/physics/': [
        {
          text: 'Magnetické pole',
          items: [
            {
              text: 'Nestacionární',
              link: '/physics/magnetic_field/nonstationary/magnetic_induction'
            },
            {
              text: 'Střídavý proud',
              link: '/physics/ac/creation.md'
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
        },
        { text: 'Faradayův zákon', link: '/physics/magnetic_field/nonstationary/faraday' },
        { text: 'Lenzův zákon', link: '/physics/magnetic_field/nonstationary/lenzs_law' },
        { text: 'Vlastní indukce', link: '/physics/magnetic_field/nonstationary/own_induction' },
        { text: 'Přechodný děj a energie magnetického pole cívky', link: '/physics/magnetic_field/nonstationary/transient_response' },
      ],
      '/physics/ac/': [
        {
          text: '<- Fyzika',
          link: '/physics/physics',
        },
        { text: 'Střídavý proud', link: '/physics/ac/creation.md'},
        { text: 'Obvody', 
          items: [
            { text: 'Obvody AC s rezistorem', link: '/physics/ac/circuits/circuit_basics.md'}
          ]
        },
      ],
      '/czech/starovek/rim/': [
        {text: '<-- Antická literatra', link: '/czech/starovek/anticka_literatura'},
        {text: '<- Řecká literatura', link: '/czech/starovek/recko/recko'},
        {text: 'Římská literatura', link: '/czech/starovek/rim/rim'}
      ],
      '/czech/starovek/recko/': [
        {text: '<- Antická literatura', link: '/czech/starovek/anticka_literatura'},
        {text: 'Řecká literatura', link: '/czech/starovek/recko/recko'},
        {text: 'Archaické období', link: '/czech/starovek/recko/archaicke_obdobi'},
        {text: '-> Římská literatura', link: '/czech/starovek/rim/rim'},
      ],
      '/biologie/': [
        {text: 'Vylučovací soustava', link: '/biologie/vylucovaci_soustava/intro'},
        {text: 'Kůže', link: '/biologie/kuze/kuze'},
      ],
      '/biologie/vylucovaci_soustava/': [
        {text: '<- Biologie', link: '/biologie/biologie'},
        {text: 'Vylučovací soustava', link: '/biologie/vylucovaci_soustava/intro'},
        {text: 'Ledviny', link: '/biologie/vylucovaci_soustava/ledviny'},
        {text: 'Močovod', link: '/biologie/vylucovaci_soustava/mocovod'},
        {text: 'Močový měchýř', link: '/biologie/vylucovaci_soustava/mocovy_mechyr'}, 
        {text: 'Onemocění vylučovací soustavy', link: '/biologie/vylucovaci_soustava/onemocneni_vs'}, 
        {text: 'Onemocění jater', link: '/biologie/vylucovaci_soustava/onemocneni_jater'}, 
        {text: 'Kůže ->', link: '/biologie/kuze/kuze'}, 
      ],
      '/biologie/kuze/': [
        {text: '<- Biologie', link: '/biologie/biologie'},
        {text: 'Kůže', link: '/biologie/kuze/kuze'},
      ],
      '/geography/': [
        {text: 'Test 9. 3. 2026', link: '/geography/test_9_3_26/jz_asie'}
      ],
      '/geography/test_9_3_26/': [
        {text: 'JZ Asie', link: '/geography/test_9_3_26/jz_asie'},
        {text: 'Aijské středomoří', link: '/geography/test_9_3_26/asijske_stredomori'},
        {text: 'Perský záliv', link: '/geography/test_9_3_26/persky_zaliv'},
        {text: 'Kavkazsko', link: '/geography/test_9_3_26/kavkazsko'},
        {text: 'Středoasijské republiky', link: '/geography/test_9_3_26/stredoasijske_rep'}
      ]
    
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cheesecake-Corp/cheesecakecorp' }
    ]
  },
  markdown: {
    math: true,
    toc: {
      level: [2, 3]
    }
  }
})
