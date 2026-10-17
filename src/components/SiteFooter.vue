<script setup lang="ts">
import { privacyIsExternal, site } from '@/config'
import BrandMark from './BrandMark.vue'
</script>

<template>
  <footer class="border-t border-line">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
      <div class="max-w-xs">
        <a href="#top" class="flex items-center gap-2.5" :aria-label="`${site.name}, back to top`">
          <BrandMark class="size-9" />
          <img src="/brand/wordmark-for-light-bg.svg" :alt="site.name" class="h-5 w-auto dark:hidden" />
          <img src="/brand/wordmark-for-dark-bg.svg" :alt="site.name" class="hidden h-5 w-auto dark:block" />
        </a>
        <p class="mt-4 text-muted">{{ site.tagline }}</p>
      </div>

      <nav class="grid grid-cols-2 gap-x-14 gap-y-3 text-[0.95rem]" aria-label="Footer">
        <a href="#features" class="text-muted transition hover:text-ink">Features</a>
        <a href="#privacy" class="text-muted transition hover:text-ink">Privacy</a>
        <a href="#settings" class="text-muted transition hover:text-ink">Settings</a>
        <a href="#download" class="text-muted transition hover:text-ink">Download</a>
        <a :href="site.privacyUrl" :target="privacyIsExternal ? '_blank' : undefined" :rel="privacyIsExternal ? 'noopener' : undefined" class="text-muted transition hover:text-ink">Privacy policy</a>
        <a v-if="site.supportHref" :href="site.supportHref" class="text-muted transition hover:text-ink">Support</a>
      </nav>
    </div>
    <div class="border-t border-line">
      <div class="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>© {{ site.year }} {{ site.developer }}. {{ site.name }} v{{ site.version }}.</p>
        <p>Built with open-source software. See Settings → Open source licences in the app.</p>
      </div>
    </div>
  </footer>
</template>
