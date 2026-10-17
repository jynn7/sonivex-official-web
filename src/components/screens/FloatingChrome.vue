<script setup lang="ts">
import Icon from '../Icon.vue'

/** The app's floating mini player and floating nav bar, shared by several illustrated screens. */
withDefaults(
  defineProps<{
    mini?: boolean
    tab?: 0 | 1 | 2 | 3
    light?: boolean
    from?: string
    to?: string
    title?: string
    artist?: string
  }>(),
  {
    mini: true,
    tab: 0,
    light: false,
    from: '#ff6b4a',
    to: '#ffb347',
    title: 'Midnight Tide',
    artist: 'Aria Vale',
  },
)

const tabs = ['home', 'search', 'heart', 'list'] as const
</script>

<template>
  <div class="absolute inset-x-3 bottom-3 z-20 flex flex-col gap-2">
    <div
      v-if="mini"
      class="flex items-center gap-2.5 rounded-[1.4rem] px-2.5 py-2 shadow-lg ring-1 backdrop-blur-xl"
      :class="light ? 'bg-white/85 text-[#15161d] ring-black/10' : 'bg-[#23242f]/80 text-paper ring-white/10'"
    >
      <span
        class="size-9 shrink-0 rounded-xl"
        :style="{ background: `linear-gradient(135deg, ${from}, ${to})` }"
      ></span>
      <span class="min-w-0 flex-1 leading-tight">
        <span class="block truncate text-[0.8rem] font-semibold">{{ title }}</span>
        <span class="block truncate text-[0.68rem] opacity-60">{{ artist }}</span>
      </span>
      <Icon name="prev" class="size-4 opacity-70" />
      <span class="grid size-8 place-items-center rounded-full text-night" :style="{ background: from }">
        <Icon name="pause" class="size-3.5" />
      </span>
      <Icon name="next" class="size-4 opacity-70" />
    </div>
    <div
      class="flex items-center justify-around rounded-full px-3 py-2 shadow-lg ring-1 backdrop-blur-xl"
      :class="light ? 'bg-white/85 ring-black/10' : 'bg-[#23242f]/80 ring-white/10'"
    >
      <span
        v-for="(name, i) in tabs"
        :key="name"
        class="grid size-9 place-items-center rounded-full"
        :class="i === tab ? 'text-night' : light ? 'text-[#15161d]/50' : 'text-paper/50'"
        :style="i === tab ? { background: from } : undefined"
      >
        <Icon :name="name" class="size-[1.15rem]" />
      </span>
    </div>
  </div>
</template>
