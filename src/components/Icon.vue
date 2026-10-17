<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ name: string }>()

interface Glyph {
  d: string
  fill?: boolean
}

// 24x24 line icons; `fill` ones (transport controls) are solid shapes.
const glyphs: Record<string, Glyph> = {
  home: { d: 'M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z' },
  search: { d: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3' },
  heart: {
    d: 'M12 21s-7.5-4.6-9.5-9.2C1.2 8.5 3 5 6.3 5c2 0 3.2 1 5.7 3.2C14.5 6 15.7 5 17.7 5 21 5 22.8 8.5 21.5 11.8 19.5 16.4 12 21 12 21z',
  },
  list: { d: 'M4 6h16M4 12h16M4 18h10' },
  music: {
    d: 'M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  },
  play: { d: 'M7 4.5v15l13-7.5z', fill: true },
  pause: { d: 'M6 4h4v16H6zM14 4h4v16h-4z', fill: true },
  next: { d: 'M5 4.5v15l10-7.5zM17 5h2.5v14H17z', fill: true },
  prev: { d: 'M19 4.5v15L9 12zM7 5H4.5v14H7z', fill: true },
  shuffle: { d: 'M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5' },
  repeat: { d: 'M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3' },
  sparkles: {
    d: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z',
  },
  car: {
    d: 'M5 17h14M3 13l2-6a2 2 0 0 1 2-1.5h10a2 2 0 0 1 2 1.5l2 6v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM7 13.5h.01M17 13.5h.01',
  },
  video: { d: 'M3 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3zM17 10l5-3v10l-5-3z' },
  link: {
    d: 'M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1',
  },
  shield: { d: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5L16 9.5' },
  download: { d: 'M12 3v12M7 11l5 5 5-5M4 20h16' },
  sun: {
    d: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  },
  moon: { d: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z' },
  mic: { d: 'M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zM6 11a6 6 0 0 0 12 0M12 17v4' },
  back: { d: 'M15 5l-7 7 7 7' },
  info: { d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01' },
  check: { d: 'M5 12.5l4.5 4.5L19 7.5' },
  x: { d: 'M6 6l12 12M18 6L6 18' },
  sliders: { d: 'M4 8h10M18 8h2M4 16h2M10 16h10M16 6v4M8 14v4' },
  grip: { d: 'M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01' },
  clock: { d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2' },
  mail: { d: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3 7l9 6 9-6' },
  arrow: { d: 'M5 12h14M13 6l6 6-6 6' },
  eq: { d: 'M5 21v-7M5 10V3M12 21v-9M12 8V3M19 21v-4M19 13V3M2 14h6M9 8h6M16 17h6' },
  volume: { d: 'M4 9v6h4l5 4V5L8 9zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12' },
  lock: { d: 'M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3' },
  undo: { d: 'M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3' },
  fullscreen: { d: 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5' },
  chevron: { d: 'M6 9l6 6 6-6' },
}

const glyph = computed(() => glyphs[props.name] ?? glyphs.info!)
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    :fill="glyph.fill ? 'currentColor' : 'none'"
    :stroke="glyph.fill ? 'none' : 'currentColor'"
    stroke-width="1.9"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path :d="glyph.d" />
  </svg>
</template>
