<script setup lang="ts">
import { downloads, hasDownload, site } from '@/config'
import Icon from './Icon.vue'

withDefaults(defineProps<{ center?: boolean }>(), { center: false })

/** A path such as /downloads/sonivex.apk is served by this site; an absolute URL may live elsewhere. */
const apkFileName = `sonivex-${site.version}.apk`
</script>

<template>
  <div class="flex flex-wrap items-center gap-3" :class="center ? 'justify-center' : ''">
    <a
      v-if="downloads.playStoreUrl"
      :href="downloads.playStoreUrl"
      target="_blank"
      rel="noopener"
      class="group inline-flex items-center gap-3 rounded-2xl bg-night px-5 py-3 text-paper shadow-lg shadow-black/20 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:ring-white/40"
      aria-label="Get Sonivex on Google Play"
    >
      <svg viewBox="0 0 24 26" class="size-7 shrink-0" aria-hidden="true">
        <path d="M1.6 1.2 13 13 1.6 24.8c-.4-.3-.6-.8-.6-1.4V2.6c0-.6.2-1.1.6-1.4Z" fill="#33C6FF" />
        <path d="m16.8 9.2-3.8 3.8L1.6 1.2c.5-.3 1.2-.3 1.8.1l13.4 7.9Z" fill="#2EE59D" />
        <path d="m16.8 16.8-13.4 7.9c-.6.4-1.3.4-1.8.1L13 13l3.8 3.8Z" fill="#FF4D5E" />
        <path d="m22.4 11.7-5.6-2.5L13 13l3.8 3.8 5.6-2.5c1.1-.7 1.1-2 0-2.6Z" fill="#FFC929" />
      </svg>
      <span class="text-left leading-tight">
        <span class="block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-paper/70">Get it on</span>
        <span class="block text-lg font-semibold">Google Play</span>
      </span>
    </a>

    <a
      v-if="downloads.apkUrl"
      :href="downloads.apkUrl"
      :download="apkFileName"
      rel="noopener"
      class="inline-flex items-center gap-3 rounded-2xl bg-linear-to-br from-coral to-[#ff8a6b] px-5 py-3 font-semibold text-night shadow-lg shadow-coral/30 transition hover:-translate-y-0.5 hover:shadow-coral/50"
    >
      <Icon name="download" class="size-6 shrink-0" />
      <span class="text-left leading-tight">
        <span class="block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-night/70">Direct download</span>
        <span class="block text-lg">Download APK</span>
      </span>
    </a>

    <div
      v-if="!hasDownload"
      class="glass inline-flex items-center gap-3 rounded-2xl px-5 py-3"
      role="status"
    >
      <span class="relative flex size-2.5">
        <span class="absolute inline-flex size-full animate-ping rounded-full bg-coral opacity-70"></span>
        <span class="relative inline-flex size-2.5 rounded-full bg-coral"></span>
      </span>
      <span class="text-left leading-tight">
        <span class="block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted">Android</span>
        <span class="block text-lg font-semibold">Coming soon</span>
      </span>
    </div>
  </div>
</template>
