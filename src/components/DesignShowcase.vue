<script setup lang="ts">
import { ref } from 'vue'
import DeviceFrame from './DeviceFrame.vue'
import PlayerScreen from './screens/PlayerScreen.vue'

/** Two phones, dark and light, whose colours follow whichever "album cover" is picked. */
const albums = [
  { name: 'Midnight Tide', artist: 'Aria Vale', from: '#ff6b4a', to: '#ffb347' },
  { name: 'Paper Lanterns', artist: 'The Quiet Hours', from: '#5b5bf0', to: '#a78bfa' },
  { name: 'Slow Orbit', artist: 'Kiro Sato', from: '#14b8a6', to: '#3b82f6' },
]
const current = ref(0)
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <div class="relative flex items-start justify-center">
      <div class="-mr-14 mt-16 hidden origin-top-right scale-90 sm:block lg:scale-95">
        <DeviceFrame label="Sonivex player in the light theme">
          <PlayerScreen
            light
            :from="albums[current]!.from"
            :to="albums[current]!.to"
            :title="albums[current]!.name"
            :artist="albums[current]!.artist"
            :still="0.62"
          />
        </DeviceFrame>
      </div>
      <div class="relative z-10">
        <DeviceFrame media-key="player" label="Sonivex player with disc and arc progress bar, in the dark theme">
          <PlayerScreen
            :from="albums[current]!.from"
            :to="albums[current]!.to"
            :title="albums[current]!.name"
            :artist="albums[current]!.artist"
          />
        </DeviceFrame>
      </div>
    </div>

    <div class="glass flex items-center gap-3 rounded-full py-2 pl-4 pr-2" role="group" aria-label="Pick an album to see its colours">
      <span class="text-sm text-muted">Colours from the cover</span>
      <button
        v-for="(a, i) in albums"
        :key="a.name"
        type="button"
        class="size-9 rounded-full ring-offset-2 ring-offset-bg transition"
        :class="i === current ? 'scale-110 ring-2 ring-ink' : 'opacity-80 hover:opacity-100'"
        :style="{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }"
        :aria-label="`Use colours from ${a.name}`"
        :aria-pressed="i === current"
        @click="current = i"
      ></button>
    </div>
  </div>
</template>
