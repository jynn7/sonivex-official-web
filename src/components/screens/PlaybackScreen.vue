<script setup lang="ts">
import Icon from '../Icon.vue'

const queue = [
  { t: 'Paper Lanterns', a: 'The Quiet Hours', c: ['#5b5bf0', '#9b5cf0'] },
  { t: 'Slow Orbit', a: 'Kiro Sato', c: ['#14b8a6', '#3b82f6'] },
]
const bands = [55, 72, 40, 62, 80]
const bandLabels = ['60', '230', '910', '4k', '14k']
</script>

<template>
  <div class="relative size-full bg-[#12131a] px-3.5 pt-9">
    <!-- lock-screen style media notification -->
    <div class="rounded-3xl bg-[#23242f] p-3 ring-1 ring-white/8">
      <div class="flex items-center gap-2.5">
        <span class="size-11 rounded-xl bg-linear-to-br from-coral to-[#ffb347]"></span>
        <span class="min-w-0 flex-1 leading-tight">
          <span class="block text-[0.58rem] uppercase tracking-[0.16em] text-paper/45">Sonivex · playing</span>
          <span class="block truncate text-[0.85rem] font-semibold">Midnight Tide</span>
          <span class="block truncate text-[0.7rem] text-paper/55">Aria Vale</span>
        </span>
      </div>
      <div class="mt-2.5 h-1 rounded-full bg-white/12"><div class="h-full w-2/5 rounded-full bg-coral"></div></div>
      <div class="mt-2.5 flex items-center justify-between px-3 text-paper/80">
        <Icon name="shuffle" class="size-4 text-coral" />
        <Icon name="prev" class="size-4" />
        <span class="grid size-9 place-items-center rounded-full bg-paper text-night"><Icon name="pause" class="size-4" /></span>
        <Icon name="next" class="size-4" />
        <Icon name="repeat" class="size-4" />
      </div>
    </div>

    <!-- queue -->
    <p class="mb-1 mt-3.5 text-[0.62rem] uppercase tracking-[0.18em] text-paper/45">Up next · drag to reorder</p>
    <ul>
      <li v-for="(r, i) in queue" :key="r.t" class="flex items-center gap-2.5 py-1" :class="i === 1 ? 'rounded-xl bg-white/6' : ''">
        <Icon name="grip" class="size-4 text-paper/35" />
        <span class="size-7 rounded-lg" :style="{ background: `linear-gradient(135deg, ${r.c[0]}, ${r.c[1]})` }"></span>
        <span class="min-w-0 flex-1 truncate text-[0.74rem]">{{ r.t }} <span class="text-paper/40">· {{ r.a }}</span></span>
        <Icon name="x" class="size-3.5 text-paper/35" />
      </li>
    </ul>

    <!-- equalizer + toggles -->
    <div class="mt-3 rounded-3xl bg-[#1b1c26] p-3 ring-1 ring-white/8">
      <div class="flex items-center justify-between text-[0.7rem]">
        <span class="flex items-center gap-1.5 font-medium"><Icon name="eq" class="size-3.5 text-indigo" /> Equalizer</span>
        <span class="text-paper/45">Warm</span>
      </div>
      <div class="mt-2 flex h-14 items-end justify-between gap-2 px-1">
        <div v-for="(b, i) in bands" :key="i" class="flex h-full flex-1 flex-col items-center justify-end gap-1">
          <span class="w-1.5 rounded-full bg-linear-to-t from-indigo to-[#9b9bff]" :style="{ height: `${b}%` }"></span>
          <span class="text-[0.5rem] text-paper/40">{{ bandLabels[i] }}</span>
        </div>
      </div>
      <div class="mt-2.5 grid grid-cols-2 gap-2 text-[0.66rem]">
        <span class="flex items-center justify-between rounded-xl bg-white/6 px-2.5 py-1.5">Crossfade <b class="text-coral">6s</b></span>
        <span class="flex items-center justify-between rounded-xl bg-white/6 px-2.5 py-1.5">
          Stable volume
          <span class="h-3.5 w-6 rounded-full bg-coral p-0.5"><span class="ml-auto block size-2.5 rounded-full bg-night"></span></span>
        </span>
      </div>
    </div>

    <!-- swipe-to-stop with undo -->
    <div class="absolute inset-x-3 bottom-3 z-20">
      <div class="mb-2 flex items-center justify-between rounded-2xl bg-paper px-3.5 py-2.5 text-[0.74rem] font-medium text-night shadow-lg">
        Playback stopped
        <span class="flex items-center gap-1 font-bold text-[#4544d4]"><Icon name="undo" class="size-3.5" /> UNDO</span>
      </div>
      <div class="flex translate-x-10 items-center gap-2.5 rounded-[1.4rem] bg-[#23242f]/80 px-2.5 py-2 opacity-60 ring-1 ring-white/10">
        <span class="size-9 rounded-xl bg-linear-to-br from-coral to-[#ffb347]"></span>
        <span class="flex-1 text-[0.8rem] font-semibold">Midnight Tide</span>
        <span class="pr-1 text-[0.6rem] text-paper/50">← swipe away</span>
      </div>
    </div>
  </div>
</template>
