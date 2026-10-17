import { ref } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'sonivex-theme'

const theme = ref<Theme>(
  (document.documentElement.dataset.theme as Theme | undefined) === 'light' ? 'light' : 'dark',
)

/** Light/dark switch shared by the whole page. The initial value was set in index.html before paint. */
export function useTheme() {
  function set(next: Theme) {
    theme.value = next
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode or blocked storage: the choice just won't persist.
    }
  }

  function toggle() {
    set(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggle }
}
