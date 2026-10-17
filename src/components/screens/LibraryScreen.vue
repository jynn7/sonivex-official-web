<script setup lang="ts">
import Icon from '../Icon.vue'
import FloatingChrome from './FloatingChrome.vue'

const tracks = [
  { t: 'Midnight Tide', a: 'Aria Vale', d: '3:42', c: ['#ff6b4a', '#ffb347'], fav: true },
  { t: 'Paper Lanterns', a: 'The Quiet Hours', d: '4:08', c: ['#5b5bf0', '#9b5cf0'], fav: false },
  { t: 'Slow Orbit', a: 'Kiro Sato', d: '2:57', c: ['#14b8a6', '#3b82f6'], fav: true },
  { t: 'Glass Garden', a: 'Aria Vale', d: '5:11', c: ['#f472b6', '#fb923c'], fav: false },
  { t: 'Weekend Static', a: 'Neon Fern', d: '3:19', c: ['#a3e635', '#14b8a6'], fav: false },
  { t: 'Harbour Lights', a: 'The Quiet Hours', d: '4:36', c: ['#60a5fa', '#5b5bf0'], fav: false },
]
const chips = ['Songs', 'Playlists', 'Favourites', 'History']
</script>

<template>
  <div class="relative size-full bg-[#12131a] px-4 pt-9">
    <div class="mb-3 flex items-end justify-between">
      <div>
        <p class="text-[0.65rem] uppercase tracking-[0.2em] text-paper/45">Library</p>
        <h4 class="text-[1.6rem] font-semibold leading-none">1,248 songs</h4>
      </div>
      <span class="mb-0.5 rounded-full bg-white/8 px-2.5 py-1 text-[0.62rem] text-paper/60">Scanned just now</span>
    </div>

    <div class="mb-3 flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-2 text-[0.78rem] text-paper/50">
      <Icon name="search" class="size-4" /> Search songs, artists…
    </div>

    <div class="mb-3 flex gap-1.5 overflow-hidden">
      <span
        v-for="(c, i) in chips"
        :key="c"
        class="rounded-full px-3 py-1 text-[0.7rem] font-medium"
        :class="i === 0 ? 'bg-coral text-night' : 'bg-white/8 text-paper/65'"
      >
        {{ c }}
      </span>
    </div>

    <ul class="space-y-0.5">
      <li v-for="r in tracks" :key="r.t" class="flex items-center gap-3 rounded-2xl py-1.5">
        <span
          class="size-10 shrink-0 rounded-xl"
          :style="{ background: `linear-gradient(135deg, ${r.c[0]}, ${r.c[1]})` }"
        ></span>
        <span class="min-w-0 flex-1 leading-tight">
          <span class="block truncate text-[0.82rem] font-medium">{{ r.t }}</span>
          <span class="block truncate text-[0.7rem] text-paper/50">{{ r.a }}</span>
        </span>
        <Icon v-if="r.fav" name="heart" class="size-3.5 fill-coral text-coral" />
        <span class="text-[0.68rem] tabular-nums text-paper/40">{{ r.d }}</span>
      </li>
    </ul>

    <FloatingChrome :tab="3" />
  </div>
</template>
