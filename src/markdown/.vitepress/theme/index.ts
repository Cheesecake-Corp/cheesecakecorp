import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from '@giscus/vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () =>
        h(Giscus, {
          repo: 'Cheesecake-Corp/cheesecakecorp',
          repoId: 'R_kgDORIZD9g',
          category: 'Announcements',
          categoryId: 'CATEGORY_ID',
          mapping: 'pathname',
          inputPosition: 'bottom',
          theme: 'preferred_color_scheme',
          lang: 'cs'
        })
    })
  }
}
