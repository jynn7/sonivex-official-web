<script setup lang="ts">
/** A row of animated capsules, the logo's shape repeated as an equalizer. */
const count = 56
const bars = Array.from({ length: count }, (_, i) => {
  // Two overlapping sine waves give a believable, repeatable waveform.
  const h = 0.32 + 0.68 * Math.abs(Math.sin(i * 0.37) * 0.6 + Math.sin(i * 0.11 + 1.3) * 0.4)
  return { h, delay: (i % 14) * 110, tone: i % 3 === 0 ? 'coral' : i % 3 === 1 ? 'indigo' : 'mute' }
})
</script>

<template>
  <div class="flex h-24 items-center justify-between gap-[3px] sm:h-32 sm:gap-1.5" aria-hidden="true">
    <span
      v-for="(b, i) in bars"
      :key="i"
      class="flex h-full flex-1 items-center justify-center"
    >
      <span
        class="block w-full max-w-2.5 animate-eq rounded-full"
        :class="b.tone === 'coral' ? 'bg-coral' : b.tone === 'indigo' ? 'bg-indigo' : 'bg-ink/15'"
        :style="{ height: `${b.h * 100}%`, animationDelay: `${b.delay}ms`, animationDuration: `${1.1 + (i % 5) * 0.18}s` }"
      ></span>
    </span>
  </div>
</template>
