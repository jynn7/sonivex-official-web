<script setup lang="ts">
/**
 * One data type or permission. The capsule is coral when it stays on the device and indigo when it
 * touches the internet (`online`).
 */
defineProps<{ term?: string; online?: boolean }>()
</script>

<template>
  <div class="relative grid gap-2 border-b border-line py-5 pl-7 sm:grid-cols-[minmax(13rem,0.4fr)_minmax(0,1fr)] sm:gap-x-8">
    <span
      class="absolute left-0 top-[1.4rem] h-[26px] w-2.5 rounded-full"
      :class="online ? 'bg-indigo' : 'bg-coral'"
      aria-hidden="true"
    ></span>
    <h3 class="ledger-term !m-0 text-[1.15rem] font-medium leading-snug">
      <slot name="term">{{ term }}</slot>
    </h3>
    <div class="ledger-body"><slot /></div>
  </div>
</template>
