<script setup lang="ts">
import { computed } from 'vue'

/**
 * The app's disc player: a record spinning inside an arc progress bar. The arc fills and its thumb
 * travels while the disc turns, all in CSS, so it is cheap and respects reduced motion.
 */
const props = withDefaults(
  defineProps<{
    from?: string
    to?: string
    /** Seconds for one full pass of the arc. */
    duration?: number
    /** Show the arc filled to this fraction and keep it still. */
    still?: number
  }>(),
  { from: '#ff6b4a', to: '#ffb347', duration: 16, still: undefined },
)

const id = `disc-${Math.random().toString(36).slice(2, 8)}`
const arcStyle = computed(() => {
  if (props.still !== undefined) return { strokeDashoffset: 100 - props.still * 100 }
  return { animation: `sweep ${props.duration}s linear infinite` }
})
const thumbStyle = computed(() => {
  if (props.still !== undefined) return { transform: `rotate(${props.still * 270}deg)` }
  return { animation: `thumb ${props.duration}s linear infinite` }
})
</script>

<template>
  <svg viewBox="0 0 200 200" class="block size-full" role="img" aria-label="Disc player with arc progress bar">
    <defs>
      <linearGradient :id="`${id}-label`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" :stop-color="from" />
        <stop offset="1" :stop-color="to" />
      </linearGradient>
      <linearGradient :id="`${id}-arc`" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" :stop-color="from" />
        <stop offset="1" :stop-color="to" />
      </linearGradient>
      <radialGradient :id="`${id}-sheen`" cx="0.35" cy="0.3" r="0.9">
        <stop offset="0" stop-color="#fff" stop-opacity="0.18" />
        <stop offset="0.5" stop-color="#fff" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- arc track + progress (270 degrees, open at the bottom) -->
    <path
      d="M 37.77 162.23 A 88 88 0 1 1 162.23 162.23"
      fill="none"
      stroke="currentColor"
      stroke-opacity="0.14"
      stroke-width="5"
      stroke-linecap="round"
    />
    <path
      d="M 37.77 162.23 A 88 88 0 1 1 162.23 162.23"
      pathLength="100"
      fill="none"
      :stroke="`url(#${id}-arc)`"
      stroke-width="5"
      stroke-linecap="round"
      stroke-dasharray="100 100"
      :style="arcStyle"
    />
    <g class="origin-center [transform-box:view-box]" :style="thumbStyle">
      <circle cx="37.77" cy="162.23" r="7.5" :fill="from" stroke="#fff" stroke-width="2.5" />
    </g>

    <!-- the record -->
    <g class="origin-center animate-spin-slow [transform-box:view-box]">
      <circle cx="100" cy="100" r="70" fill="#0c0d12" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="#fff" stroke-opacity="0.07" />
      <circle cx="100" cy="100" r="57" fill="none" stroke="#fff" stroke-opacity="0.06" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#fff" stroke-opacity="0.07" />
      <circle cx="100" cy="100" r="43" fill="none" stroke="#fff" stroke-opacity="0.05" />
      <path d="M100 30a70 70 0 0 1 49 20" fill="none" stroke="#fff" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" />
      <circle cx="100" cy="100" r="30" :fill="`url(#${id}-label)`" />
      <!-- the two capsules of the logo on the label -->
      <rect x="90" y="86" width="7" height="22" rx="3.5" fill="#12131a" fill-opacity="0.78" />
      <rect x="103" y="92" width="7" height="22" rx="3.5" fill="#12131a" fill-opacity="0.78" transform="translate(0 -4)" />
      <circle cx="100" cy="100" r="3" fill="#0c0d12" />
    </g>
    <circle cx="100" cy="100" r="70" :fill="`url(#${id}-sheen)`" />
  </svg>
</template>

<style>
@keyframes thumb {
  from { transform: rotate(0deg); }
  to { transform: rotate(270deg); }
}
</style>
