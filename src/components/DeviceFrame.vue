<script setup lang="ts">
import { computed } from 'vue'
import { useScreenMedia } from '@/composables/useScreenMedia'

/**
 * A device bezel around one app screen. If a real capture named `mediaKey` exists in
 * src/assets/screens it is shown instead of the illustrated slot content.
 */
const props = withDefaults(
  defineProps<{
    kind?: 'phone' | 'landscape' | 'car'
    mediaKey?: string
    label: string
  }>(),
  { kind: 'phone', mediaKey: undefined },
)

const media = computed(() => (props.mediaKey ? useScreenMedia(props.mediaKey) : undefined))

const shell = computed(
  () =>
    ({
      phone: 'w-[17.5rem] aspect-[9/19.2] rounded-[2.6rem] p-[0.55rem]',
      landscape: 'w-full max-w-[34rem] aspect-[19.2/9] rounded-[2.2rem] p-[0.5rem]',
      car: 'w-full max-w-[36rem] aspect-[16/9] rounded-[1.4rem] p-[0.7rem]',
    })[props.kind],
)
const inner = computed(
  () =>
    ({
      phone: 'rounded-[2.1rem]',
      landscape: 'rounded-[1.8rem]',
      car: 'rounded-[0.9rem]',
    })[props.kind],
)
</script>

<template>
  <figure class="relative m-0" :class="kind === 'phone' ? '' : 'w-full'">
    <div
      class="relative bg-linear-to-b from-[#2b2d3a] to-[#14151c] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.55)] ring-1 ring-white/15"
      :class="shell"
    >
      <div class="relative isolate size-full overflow-hidden bg-night text-paper" :class="inner">
        <template v-if="media">
          <video
            v-if="media.kind === 'video'"
            :src="media.src"
            class="size-full object-cover"
            autoplay
            muted
            loop
            playsinline
            :aria-label="label"
          ></video>
          <img v-else :src="media.src" :alt="label" class="size-full object-cover" loading="lazy" />
        </template>
        <slot v-else />

        <!-- camera -->
        <span
          v-if="kind === 'phone'"
          class="absolute left-1/2 top-2.5 z-30 size-2.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10"
        ></span>
        <span
          v-else-if="kind === 'landscape'"
          class="absolute left-2.5 top-1/2 z-30 size-2.5 -translate-y-1/2 rounded-full bg-black ring-1 ring-white/10"
        ></span>
      </div>
    </div>
    <figcaption class="sr-only">{{ label }}</figcaption>
  </figure>
</template>
