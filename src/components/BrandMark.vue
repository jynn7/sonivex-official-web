<script setup lang="ts">
// The Sonivex mark: two rounded capsules, the right one sitting lower.
withDefaults(defineProps<{ tile?: boolean }>(), { tile: false })
</script>

<template>
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <rect v-if="tile" x="3" y="3" width="94" height="94" rx="21.15" fill="#12131A" />
    <rect x="28" y="22" width="16" height="48" rx="8" fill="#FF6B4A" />
    <rect x="56" y="32" width="16" height="48" rx="8" fill="#5B5BF0" />
  </svg>
</template>
