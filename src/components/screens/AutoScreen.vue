<script setup lang="ts">
import Icon from '../Icon.vue'

const tabs = [
  { n: 'music', l: 'Songs' },
  { n: 'list', l: 'Playlists' },
  { n: 'heart', l: 'Favourites' },
  { n: 'search', l: 'Search' },
]
</script>

<template>
  <div class="flex size-full bg-[#0e0f15] text-paper">
    <!-- left rail like the Android Auto launcher -->
    <div class="flex w-[13%] flex-col items-center justify-between border-r border-white/8 bg-black/30 py-2 sm:py-3">
      <span class="grid size-6 place-items-center rounded-full bg-white/10 sm:size-7"><Icon name="mic" class="size-3 sm:size-3.5" /></span>
      <div class="flex flex-col gap-1 sm:gap-2.5">
        <span
          v-for="(t, i) in tabs"
          :key="t.n"
          class="grid size-6 place-items-center rounded-lg sm:size-8 sm:rounded-xl"
          :class="i === 0 ? 'bg-coral text-night' : 'text-paper/55'"
        >
          <Icon :name="t.n" class="size-3 sm:size-4" />
        </span>
      </div>
      <span class="hidden text-[0.5rem] text-paper/40 sm:block">10:42</span>
    </div>

    <!-- now playing -->
    <div class="relative flex flex-1 items-center gap-[4%] overflow-hidden px-[5%]">
      <div class="absolute -left-10 top-0 size-40 rounded-full bg-coral/25 blur-3xl"></div>
      <div class="absolute -right-10 bottom-0 size-40 rounded-full bg-indigo/30 blur-3xl"></div>

      <span class="relative aspect-square w-[34%] shrink-0 rounded-2xl bg-linear-to-br from-coral to-[#ffb347] shadow-2xl">
        <span class="absolute inset-0 grid place-items-center">
          <span class="flex gap-[0.4rem]">
            <span class="h-10 w-3 rounded-full bg-night/75"></span>
            <span class="mt-2 h-10 w-3 rounded-full bg-night/75"></span>
          </span>
        </span>
      </span>

      <div class="relative min-w-0 flex-1">
        <p class="text-[0.5rem] uppercase tracking-[0.2em] text-paper/45">Sonivex</p>
        <h4 class="truncate text-[1.05rem] font-semibold leading-tight">Midnight Tide</h4>
        <p class="truncate text-[0.7rem] text-paper/60">Aria Vale</p>
        <div class="mt-2.5 h-1 rounded-full bg-white/15"><div class="h-full w-[38%] rounded-full bg-coral"></div></div>
        <div class="mt-3 flex items-center gap-4 text-paper/85">
          <Icon name="prev" class="size-4" />
          <span class="grid size-9 place-items-center rounded-full bg-paper text-night"><Icon name="pause" class="size-4" /></span>
          <Icon name="next" class="size-4" />
        </div>
        <p class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/8 px-2.5 py-1 text-[0.58rem] text-paper/70">
          <Icon name="mic" class="size-3 text-coral" /> “Hey Google, play Aria Vale”
        </p>
      </div>
    </div>
  </div>
</template>
