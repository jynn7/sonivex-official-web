<script setup lang="ts">
import { computed } from 'vue'
import { site } from '@/config'
import { vReveal } from '@/composables/vReveal'
import DeviceFrame from './DeviceFrame.vue'
import DownloadButtons from './DownloadButtons.vue'
import EqBars from './EqBars.vue'
import Icon from './Icon.vue'
import PlayerScreen from './screens/PlayerScreen.vue'

// Tagline "Your music, kept on your device." -> first part plain, the rest in the brand gradient.
const taglineParts = computed(() => {
  const [first, ...rest] = site.tagline.split(/,\s*/)
  return rest.length ? { lead: `${first},`, accent: rest.join(', ') } : { lead: '', accent: site.tagline }
})

const badges = ['No account', 'No ads', 'No tracking', 'On-device AI']
</script>

<template>
  <section id="top" class="relative isolate overflow-hidden pb-6 pt-32 sm:pt-40">
    <!-- aurora wash -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute -left-40 -top-32 size-[38rem] rounded-full blur-[110px]" style="background: var(--aurora-a)"></div>
      <div class="absolute -right-48 top-10 size-[42rem] rounded-full blur-[120px]" style="background: var(--aurora-b)"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--line)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"></div>
    </div>

    <div class="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div v-reveal>
        <p class="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm text-muted">
          <span class="size-2 rounded-full bg-coral"></span>
          Version {{ site.version }} · Android {{ site.minAndroid }} or later
        </p>

        <h1 class="mt-6 text-balance text-[2.9rem] font-semibold leading-[1.02] tracking-tight sm:text-7xl">
          <template v-if="taglineParts.lead">{{ taglineParts.lead }}<br /></template>
          <span class="text-gradient">{{ taglineParts.accent }}</span>
        </h1>

        <p class="mt-6 max-w-xl text-pretty text-lg text-muted sm:text-xl">
          {{ site.name }} is a local-first music player for Android. A floating glass interface, AI mixes that run
          on your phone, Android Auto, and a video player, with no account in sight.
        </p>

        <div class="mt-9">
          <DownloadButtons />
        </div>

        <ul class="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <li v-for="b in badges" :key="b" class="flex items-center gap-1.5">
            <Icon name="check" class="size-4 text-coral" /> {{ b }}
          </li>
        </ul>
      </div>

      <div class="relative mx-auto flex w-full max-w-md justify-center pb-6 lg:pb-0" v-reveal="150">
        <!-- the logo's two offset capsules, enlarged behind the phone -->
        <span class="absolute -left-2 top-6 h-64 w-24 animate-float rounded-full bg-coral shadow-[0_30px_80px_-20px_rgb(255_107_74/0.7)] sm:left-0 sm:h-80 sm:w-28" aria-hidden="true"></span>
        <span class="absolute -right-2 top-24 h-64 w-24 animate-float rounded-full bg-indigo shadow-[0_30px_80px_-20px_rgb(91_91_240/0.7)] [animation-delay:-3.5s] sm:right-0 sm:h-80 sm:w-28" aria-hidden="true"></span>

        <div class="relative z-10">
          <DeviceFrame media-key="hero" label="Sonivex disc player with an arc progress bar">
            <PlayerScreen />
          </DeviceFrame>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
      <EqBars />
    </div>
  </section>
</template>
