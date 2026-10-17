<script setup lang="ts">
import { hasDownload, site } from '@/config'
import BrandMark from './BrandMark.vue'
import Icon from './Icon.vue'

// A floating "mini player" for phones, echoing the app's own: keeps the download one tap away.
defineProps<{ show: boolean }>()
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-24 opacity-0"
    leave-active-class="transition duration-300 ease-in"
    leave-to-class="translate-y-24 opacity-0"
  >
    <a
      v-if="show"
      href="#download"
      class="glass fixed inset-x-4 bottom-4 z-40 flex items-center gap-3 rounded-[1.6rem] p-2.5 shadow-2xl shadow-black/20 md:hidden"
    >
      <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-night"><BrandMark class="size-8" /></span>
      <span class="min-w-0 flex-1 leading-tight">
        <span class="block truncate font-semibold">{{ site.name }}</span>
        <span class="block truncate text-sm text-muted">Android {{ site.minAndroid }}+ · v{{ site.version }}</span>
      </span>
      <span class="flex items-center gap-1.5 rounded-full bg-coral px-4 py-2.5 font-semibold text-night">
        <Icon name="download" class="size-4" /> {{ hasDownload ? 'Get' : 'Soon' }}
      </span>
    </a>
  </Transition>
</template>
