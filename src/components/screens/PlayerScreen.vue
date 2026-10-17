<script setup lang="ts">
import { computed } from 'vue'
import DiscPlayer from '../DiscPlayer.vue'
import Icon from '../Icon.vue'

/** The full player: colours come from `from`/`to`, standing in for the album art's palette. */
const props = withDefaults(
  defineProps<{
    from?: string
    to?: string
    light?: boolean
    title?: string
    artist?: string
    still?: number
  }>(),
  { from: '#ff6b4a', to: '#ffb347', light: false, title: 'Midnight Tide', artist: 'Aria Vale', still: undefined },
)

const bg = computed(() =>
  props.light
    ? `radial-gradient(120% 70% at 50% 0%, ${props.from}55, transparent 70%), #f4f5f8`
    : `radial-gradient(120% 70% at 50% 0%, ${props.from}66, transparent 70%), #12131a`,
)
</script>

<template>
  <div
    class="relative size-full px-5 pt-9 transition-colors duration-700"
    :class="light ? 'text-[#15161d]' : 'text-paper'"
    :style="{ background: bg }"
  >
    <div class="flex items-center justify-between opacity-70">
      <Icon name="chevron" class="size-5" />
      <span class="text-[0.6rem] uppercase tracking-[0.22em]">Now playing</span>
      <Icon name="list" class="size-5" />
    </div>

    <div class="mx-auto mt-5 size-[13.4rem]" :style="{ color: light ? '#15161d' : '#f4f5f8' }">
      <DiscPlayer :from="from" :to="to" :still="still" :duration="18" />
    </div>

    <div class="mt-2 text-center leading-tight">
      <h4 class="text-[1.2rem] font-semibold">{{ title }}</h4>
      <p class="text-[0.8rem] opacity-60">{{ artist }}</p>
    </div>

    <div class="mt-2 flex justify-between px-2 text-[0.62rem] tabular-nums opacity-55">
      <span>1:24</span><span>3:42</span>
    </div>

    <div class="mt-2 flex items-center justify-between px-2">
      <Icon name="shuffle" class="size-[1.1rem] opacity-60" />
      <Icon name="prev" class="size-6" />
      <span
        class="grid size-14 place-items-center rounded-full text-night shadow-lg transition-colors duration-700"
        :style="{ background: `linear-gradient(135deg, ${from}, ${to})` }"
      >
        <Icon name="pause" class="size-6" />
      </span>
      <Icon name="next" class="size-6" />
      <Icon name="repeat" class="size-[1.1rem] opacity-60" />
    </div>
  </div>
</template>
