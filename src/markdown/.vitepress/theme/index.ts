import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h, watch } from 'vue'
import { useRoute } from 'vitepress'
import Giscus from '@giscus/vue'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    return { route }
  },
  Layout() {
    const route = useRoute()
    const isPrint = typeof window !== 'undefined' && window.matchMedia('print').matches
    return h(DefaultTheme.Layout, null, {
      'doc-after': () =>
        !isPrint &&
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
