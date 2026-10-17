<script setup lang="ts">
import { vReveal } from '@/composables/vReveal'
import { settingsItems } from '@/data/features'
import Icon from './Icon.vue'

const icons = ['sun', 'sparkles', 'repeat', 'volume', 'clock', 'download', 'list']
const toggles = new Set(['Smart mixes', 'Crossfade', 'Stable volume', 'Hide short tracks'])
</script>

<template>
  <section id="settings" class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="settings-title">
    <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
      <div v-reveal>
        <p class="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          <Icon name="sliders" class="size-5 text-coral" /> Settings and updates
        </p>
        <h2 id="settings-title" class="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Make it sound and feel like yours.
        </h2>
        <p class="mt-5 max-w-md text-lg text-muted">
          Few switches, all of them useful. Everything lives in one calm Settings page, and the app can check for
          a new version without leaving it.
        </p>
        <p class="mt-3 max-w-md text-sm text-muted/80">
          In-app update checks come from Google Play, so they appear in the Play version of the app.
        </p>
      </div>

      <ul class="divide-y divide-line overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-xl shadow-black/5" v-reveal="120">
        <li v-for="(s, i) in settingsItems" :key="s.title" class="flex items-center gap-4 px-5 py-4 sm:px-6">
          <span class="grid size-11 shrink-0 place-items-center rounded-2xl" :class="i % 2 ? 'bg-indigo/12 text-indigo dark:text-[#a9a9ff]' : 'bg-coral/15 text-coral'">
            <Icon :name="icons[i] ?? 'info'" class="size-5" />
          </span>
          <span class="min-w-0 flex-1 leading-snug">
            <span class="block font-semibold">{{ s.title }}</span>
            <span class="block text-sm text-muted">{{ s.text }}</span>
          </span>
          <span
            v-if="toggles.has(s.title)"
            class="flex h-6 w-10 shrink-0 rounded-full bg-coral p-0.5"
            aria-hidden="true"
          >
            <span class="ml-auto block size-5 rounded-full bg-white shadow"></span>
          </span>
          <Icon v-else name="chevron" class="size-5 -rotate-90 text-muted" />
        </li>
      </ul>
    </div>
  </section>
</template>
