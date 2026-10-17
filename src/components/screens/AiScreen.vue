<script setup lang="ts">
import Icon from '../Icon.vue'
import FloatingChrome from './FloatingChrome.vue'

const mix = [
  { t: 'Rainy Window', a: 'Kiro Sato', c: ['#60a5fa', '#5b5bf0'] },
  { t: 'Slow Orbit', a: 'Kiro Sato', c: ['#14b8a6', '#3b82f6'] },
  { t: 'Paper Lanterns', a: 'The Quiet Hours', c: ['#5b5bf0', '#9b5cf0'] },
]
const bars = [30, 55, 80, 45, 70, 35, 90, 60, 40, 75, 50, 28]
</script>

<template>
  <div class="relative size-full bg-[#12131a] px-4 pt-9">
    <!-- Made for you banner -->
    <div class="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo to-[#8b5cf6] p-4">
      <div class="absolute -right-6 -top-8 size-28 rounded-full bg-coral/60 blur-2xl"></div>
      <p class="relative flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-white/80">
        <Icon name="sparkles" class="size-3.5" /> Made for you
      </p>
      <h4 class="relative mt-1 text-[1.2rem] font-semibold leading-tight">Your Tuesday evening mix</h4>
      <p class="relative text-[0.7rem] text-white/75">Built on this device from what you play.</p>
    </div>

    <!-- prompt box -->
    <div class="mt-3 rounded-3xl bg-[#1b1c26] p-3 ring-1 ring-white/8">
      <p class="text-[0.62rem] uppercase tracking-[0.16em] text-paper/45">Describe a mood</p>
      <div class="mt-1.5 flex items-center gap-2 rounded-2xl bg-white/7 px-3 py-2 text-[0.82rem]">
        rainy day study<span class="h-4 w-0.5 animate-pulse bg-coral"></span>
        <Icon name="sparkles" class="ml-auto size-4 text-coral" />
      </div>
      <div class="mt-3 flex h-9 items-end gap-[3px]">
        <span
          v-for="(b, i) in bars"
          :key="i"
          class="w-full origin-bottom rounded-full animate-eq"
          :class="i % 3 === 0 ? 'bg-coral' : 'bg-indigo'"
          :style="{ height: `${b}%`, animationDelay: `${i * 90}ms` }"
        ></span>
      </div>
    </div>

    <ul class="mt-2 space-y-0.5">
      <li v-for="r in mix" :key="r.t" class="flex items-center gap-2.5 py-1">
        <span class="size-8 rounded-lg" :style="{ background: `linear-gradient(135deg, ${r.c[0]}, ${r.c[1]})` }"></span>
        <span class="min-w-0 flex-1 leading-tight">
          <span class="block truncate text-[0.78rem] font-medium">{{ r.t }}</span>
          <span class="block truncate text-[0.66rem] text-paper/50">{{ r.a }}</span>
        </span>
      </li>
    </ul>

    <p class="absolute inset-x-0 bottom-[5.9rem] z-10 mx-auto flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[0.62rem] text-paper/75 backdrop-blur">
      <Icon name="lock" class="size-3" /> On device · nothing sent
    </p>
    <FloatingChrome :mini="false" :tab="0" from="#5b5bf0" />
  </div>
</template>
