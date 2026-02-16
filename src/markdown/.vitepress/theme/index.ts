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
          category: 'General',
          categoryId: '47843435',
          mapping: 'pathname',
          inputPosition: 'bottom',
          theme: 'preferred_color_scheme',
          lang: 'cs'
        })
    })
  }
}
