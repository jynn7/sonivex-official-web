<script setup lang="ts">
import Icon from '../Icon.vue'

const kinds = [
  { t: 'Direct file', u: 'cdn.example.org/set.flac', on: false },
  { t: 'HLS', u: 'radio.example.net/live.m3u8', on: true },
  { t: 'DASH', u: 'media.example.com/show.mpd', on: false },
]
</script>

<template>
  <div class="relative size-full bg-[#12131a] px-4 pt-9">
    <p class="text-[0.65rem] uppercase tracking-[0.2em] text-paper/45">Open link</p>
    <h4 class="text-[1.4rem] font-semibold leading-tight">Paste a link,<br />press play.</h4>

    <div class="mt-4 rounded-3xl bg-[#1b1c26] p-3 ring-1 ring-white/8">
      <div class="flex items-center gap-2 rounded-2xl bg-white/7 px-3 py-2.5 text-[0.72rem]">
        <Icon name="link" class="size-4 shrink-0 text-coral" />
        <span class="min-w-0 truncate">https://radio.example.net/live.m3u8</span>
      </div>
      <div class="mt-2.5 flex items-center justify-between">
        <span class="flex items-center gap-1.5 rounded-full bg-indigo/25 px-2.5 py-1 text-[0.62rem] font-semibold text-[#b9b9ff]">
          <Icon name="check" class="size-3" /> HLS stream detected
        </span>
        <span class="rounded-full bg-coral px-4 py-1.5 text-[0.72rem] font-bold text-night">Play</span>
      </div>
    </div>

    <p class="mb-1.5 mt-4 text-[0.62rem] uppercase tracking-[0.18em] text-paper/45">Understands</p>
    <ul class="space-y-1.5">
      <li
        v-for="k in kinds"
        :key="k.t"
        class="flex items-center justify-between rounded-2xl px-3 py-2 ring-1"
        :class="k.on ? 'bg-white/8 ring-coral/50' : 'bg-white/4 ring-white/6'"
      >
        <span class="leading-tight">
          <span class="block text-[0.76rem] font-medium">{{ k.t }}</span>
          <span class="block text-[0.62rem] text-paper/45">{{ k.u }}</span>
        </span>
        <Icon name="play" class="size-3.5 text-paper/50" />
      </li>
    </ul>

    <!-- who talks to whom -->
    <div class="mt-4 rounded-3xl bg-[#1b1c26] p-3 ring-1 ring-white/8">
      <div class="flex items-center justify-between text-[0.62rem]">
        <span class="grid place-items-center gap-1 text-center"><span class="grid size-9 place-items-center rounded-xl bg-coral text-night"><Icon name="music" class="size-4" /></span>Your phone</span>
        <span class="mx-2 h-px flex-1 border-t border-dashed border-paper/40"></span>
        <span class="grid place-items-center gap-1 text-center"><span class="grid size-9 place-items-center rounded-xl bg-indigo"><Icon name="link" class="size-4" /></span>Host server</span>
      </div>
      <p class="mt-2.5 text-center text-[0.6rem] text-paper/55">Direct connection · no Sonivex servers in between</p>
    </div>
  </div>
</template>
