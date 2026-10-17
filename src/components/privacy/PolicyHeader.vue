<script setup lang="ts">
import { site } from '@/config'
import { useTheme } from '@/composables/useTheme'
import BrandMark from '../BrandMark.vue'
import Icon from '../Icon.vue'

defineProps<{ progress: number; menuOpen: boolean }>()
defineEmits<{ toggleMenu: [] }>()

const { theme, toggle } = useTheme()
</script>

<template>
  <header class="sticky top-0 z-50 h-16 border-b border-line bg-bg/85 backdrop-blur-xl">
    <div class="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
      <div class="flex items-center gap-3">
        <a href="/" class="flex items-center gap-2.5" :aria-label="`${site.name} home`">
          <BrandMark class="size-8" />
          <img src="/brand/wordmark-for-light-bg.svg" :alt="site.name" class="h-5 w-auto dark:hidden" />
          <img src="/brand/wordmark-for-dark-bg.svg" :alt="site.name" class="hidden h-5 w-auto dark:block" />
        </a>
        <span class="hidden border-l border-line pl-3 text-muted min-[481px]:block">Privacy Policy</span>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="hidden h-10 items-center gap-2 rounded-full border border-line px-3.5 text-[0.95rem] transition hover:bg-ink/5 max-[960px]:inline-flex"
          :aria-expanded="menuOpen"
          aria-controls="tracklist"
          @click.stop="$emit('toggleMenu')"
        >
          <Icon name="list" class="size-5" /> Contents
        </button>
        <a
          href="/"
          class="hidden h-10 items-center rounded-full border border-line px-4 text-[0.95rem] text-muted transition hover:bg-ink/5 hover:text-ink sm:inline-flex"
        >
          Back to site
        </a>
        <button
          type="button"
          class="grid size-10 place-items-center rounded-full border border-line transition hover:bg-ink/5"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggle"
        >
          <Icon :name="theme === 'dark' ? 'sun' : 'moon'" class="size-5" />
        </button>
      </div>
    </div>

    <!-- Reading scrubber: fills along the bar as you scroll the policy -->
    <div class="pointer-events-none absolute inset-x-0 -bottom-px h-[3px]" aria-hidden="true">
      <div class="absolute inset-y-0 left-0 bg-coral" :style="{ width: `${progress * 100}%` }"></div>
      <div
        class="absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-indigo ring-[3px] ring-bg"
        :style="{ left: `calc(${progress * 100}% - ${progress * 10}px)`, opacity: Math.min(1, progress * 50) }"
      ></div>
    </div>
  </header>
</template>
