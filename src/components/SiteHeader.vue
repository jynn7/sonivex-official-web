<script setup lang="ts">
import { hasDownload, site } from '@/config'
import { useTheme } from '@/composables/useTheme'
import BrandMark from './BrandMark.vue'
import Icon from './Icon.vue'

defineProps<{ progress: number }>()

const { theme, toggle } = useTheme()

const links = [
  { href: '#features', label: 'Features' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#settings', label: 'Settings' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
    <div
      class="glass mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full py-2 pl-4 pr-2 shadow-xl shadow-black/5"
    >
      <a href="#top" class="flex items-center gap-2.5" :aria-label="`${site.name}, back to top`">
        <BrandMark class="size-8" />
        <img src="/brand/wordmark-for-light-bg.svg" :alt="site.name" class="h-5 w-auto dark:hidden" />
        <img src="/brand/wordmark-for-dark-bg.svg" :alt="site.name" class="hidden h-5 w-auto dark:block" />
      </a>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Main">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="rounded-full px-4 py-1.5 text-[0.95rem] font-medium text-muted transition hover:bg-ink/5 hover:text-ink"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-1.5">
        <button
          type="button"
          class="grid size-10 place-items-center rounded-full text-muted transition hover:bg-ink/5 hover:text-ink"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggle"
        >
          <Icon :name="theme === 'dark' ? 'sun' : 'moon'" class="size-5" />
        </button>
        <a
          href="#download"
          class="rounded-full bg-ink px-5 py-2.5 text-[0.95rem] font-semibold text-bg transition hover:opacity-85"
        >
          {{ hasDownload ? 'Get the app' : 'Get notified' }}
        </a>
      </div>
    </div>

    <!-- Scrubber: the page is a track, scrolling plays it -->
    <div class="pointer-events-none mx-auto mt-2 hidden h-1 max-w-[17rem] rounded-full bg-ink/10 sm:block" aria-hidden="true">
      <div class="relative h-full rounded-full bg-linear-to-r from-coral to-indigo" :style="{ width: `${progress * 100}%` }">
        <span class="absolute -right-1 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-indigo ring-2 ring-bg"></span>
      </div>
    </div>
  </header>
</template>
