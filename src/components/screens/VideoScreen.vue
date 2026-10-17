<script setup lang="ts">
import Icon from '../Icon.vue'

const info = [
  ['Resolution', '1920 × 1080'],
  ['Video', 'H.264 · 30 fps'],
  ['Audio', 'AAC · stereo'],
  ['Container', 'MP4'],
]
</script>

<template>
  <div class="relative size-full overflow-hidden bg-black">
    <!-- an abstract frame of footage -->
    <svg viewBox="0 0 192 90" preserveAspectRatio="xMidYMid slice" class="absolute inset-0 size-full" aria-hidden="true">
      <defs>
        <linearGradient id="v-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#2a2b6b" />
          <stop offset="0.55" stop-color="#c2455f" />
          <stop offset="1" stop-color="#ff8a4a" />
        </linearGradient>
      </defs>
      <rect width="192" height="90" fill="url(#v-sky)" />
      <circle cx="120" cy="52" r="15" fill="#ffd8a0" opacity="0.92" />
      <path d="M0 70 L30 48 L52 62 L84 40 L120 66 L150 50 L192 72 L192 90 L0 90Z" fill="#1c1b3d" />
      <path d="M0 80 L40 64 L78 76 L124 62 L192 80 L192 90 L0 90Z" fill="#12131a" />
    </svg>
    <div class="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/70"></div>

    <!-- top bar -->
    <div class="absolute inset-x-0 top-0 flex items-center gap-2 px-[4%] pt-[3.5%] text-[0.7rem]">
      <Icon name="back" class="size-4" />
      <span class="truncate font-medium">harbour-sunset.mp4</span>
      <span class="ml-auto flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[0.58rem] backdrop-blur"><Icon name="info" class="size-3" /> Video info</span>
    </div>

    <!-- gesture hints -->
    <div class="absolute left-[7%] top-1/2 flex -translate-y-1/2 flex-col items-center gap-1.5">
      <Icon name="sun" class="size-4 text-white/80" />
      <span class="h-14 w-1 overflow-hidden rounded-full bg-white/25"><span class="mt-5 block h-full w-full bg-white"></span></span>
    </div>
    <span class="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur">
      <Icon name="pause" class="size-5" />
    </span>

    <!-- video info sheet -->
    <div class="absolute bottom-[16%] right-[3%] w-[34%] rounded-2xl bg-[#1b1c26]/92 p-[3%] ring-1 ring-white/10 backdrop-blur-xl">
      <p class="mb-1 text-[0.55rem] uppercase tracking-[0.18em] text-paper/50">Video info</p>
      <dl class="space-y-0.5 text-[0.58rem] leading-tight">
        <div v-for="row in info" :key="row[0]" class="flex justify-between gap-2">
          <dt class="text-paper/50">{{ row[0] }}</dt>
          <dd class="text-right font-medium">{{ row[1] }}</dd>
        </div>
      </dl>
    </div>

    <!-- seek bar -->
    <div class="absolute inset-x-[4%] bottom-[5%] flex items-center gap-2 text-[0.58rem] tabular-nums">
      <span>12:08</span>
      <span class="relative h-1 flex-1 rounded-full bg-white/25">
        <span class="absolute inset-y-0 left-0 w-[36%] rounded-full bg-coral"></span>
        <span class="absolute left-[36%] top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-white"></span>
      </span>
      <span>33:41</span>
      <Icon name="fullscreen" class="size-3.5" />
    </div>
  </div>
</template>
