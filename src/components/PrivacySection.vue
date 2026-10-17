<script setup lang="ts">
import { site } from '@/config'
import { vReveal } from '@/composables/vReveal'
import { privacyPromises } from '@/data/features'
import Icon from './Icon.vue'
</script>

<template>
  <section id="privacy" class="px-3 py-16 sm:px-6 sm:py-24" aria-labelledby="privacy-title">
    <div class="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-night px-6 py-14 text-paper ring-1 ring-white/10 sm:rounded-[2.75rem] sm:px-14 sm:py-20">
      <div class="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-indigo/40 blur-[100px]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -bottom-32 -left-20 size-96 rounded-full bg-coral/25 blur-[110px]" aria-hidden="true"></div>

      <div class="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div v-reveal>
          <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            <Icon name="shield" class="size-5" /> Privacy and data
          </p>
          <h2 id="privacy-title" class="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Nothing to sign up for. Nothing to sell.
          </h2>
          <p class="mt-6 max-w-lg text-lg text-paper/70">
            Your files and your listening data stay on your device. {{ site.name }} doesn’t have a server that
            holds your library, because it doesn’t need one.
          </p>
          <p class="mt-4 max-w-lg text-paper/55">
            It only goes online when you ask it to: the one-time AI model download, or a link you choose to open.
          </p>
          <a
            v-if="site.privacyUrl"
            :href="site.privacyUrl"
            target="_blank"
            rel="noopener"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-semibold text-night transition hover:gap-3"
          >
            Read the privacy policy <Icon name="arrow" class="size-5" />
          </a>
        </div>

        <ul class="grid gap-3.5 sm:grid-cols-2">
          <li
            v-for="(p, i) in privacyPromises"
            :key="p.title"
            v-reveal="i * 90"
            class="rounded-3xl bg-white/6 p-6 ring-1 ring-white/10 backdrop-blur"
          >
            <span class="grid size-10 place-items-center rounded-2xl" :class="i % 2 === 0 ? 'bg-coral text-night' : 'bg-indigo text-white'">
              <Icon name="x" class="size-5" />
            </span>
            <h3 class="mt-4 text-2xl font-semibold">{{ p.title }}</h3>
            <p class="mt-1.5 text-paper/65">{{ p.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
