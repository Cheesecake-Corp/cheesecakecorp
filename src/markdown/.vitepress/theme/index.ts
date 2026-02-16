import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from '@giscus/vue'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    return { route }
  },
  Layout() {
    const route = useRoute()
    return h(DefaultTheme.Layout, null, {
      'doc-after': () =>
        h(Giscus, {
          key : route.path,
          repo: 'Cheesecake-Corp/cheesecakecorp',
          repoId: 'R_kgDORIZD9g',
          category: 'General',
          categoryId: 'DIC_kwDORIZD9s4C2ghr',
          mapping: 'pathname',
          inputPosition: 'bottom',
          theme: 'preferred_color_scheme',
          lang: 'cs'
        })
    })
  }
}
