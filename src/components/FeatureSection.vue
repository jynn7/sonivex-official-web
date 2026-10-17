<script setup lang="ts">
import { vReveal } from '@/composables/vReveal'
import type { Feature } from '@/data/features'
import Icon from './Icon.vue'

defineProps<{ feature: Feature; index: number; total: number }>()
</script>

<template>
  <section :id="feature.id" class="relative py-16 sm:py-24" :aria-labelledby="`${feature.id}-title`">
    <div
      class="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20"
    >
      <div :class="index % 2 === 1 ? 'lg:order-2' : ''" v-reveal>
        <p class="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
          <span
            class="tabular-nums"
            :class="feature.accent === 'coral' ? 'text-coral' : 'text-indigo dark:text-[#9b9bff]'"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <span class="h-px w-8 bg-current opacity-30"></span>
          <span class="text-muted">{{ feature.kicker }}</span>
        </p>

        <h3 :id="`${feature.id}-title`" class="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-[2.6rem]">
          {{ feature.title }}
        </h3>
        <p class="mt-5 max-w-xl text-pretty text-lg text-muted">{{ feature.lead }}</p>

        <ul class="mt-7 space-y-3">
          <li v-for="p in feature.points" :key="p" class="flex gap-3">
            <span
              class="mt-1 grid size-5 shrink-0 place-items-center rounded-full text-night"
              :class="feature.accent === 'coral' ? 'bg-coral' : 'bg-indigo text-white'"
            >
              <Icon name="check" class="size-3" />
            </span>
            <span>{{ p }}</span>
          </li>
        </ul>

        <div v-for="d in feature.details" :key="d.label" class="mt-8">
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{{ d.label }}</p>

          <div v-if="d.type === 'chips'" class="flex flex-wrap gap-2">
            <span
              v-for="c in d.items"
              :key="c"
              class="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium"
            >
              {{ c }}
            </span>
          </div>

          <dl v-else-if="d.type === 'facts'" class="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
            <div v-for="f in d.items" :key="f.k" class="grid gap-1 px-5 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-4">
              <dt class="font-semibold">{{ f.k }}</dt>
              <dd class="text-muted">{{ f.v }}</dd>
            </div>
          </dl>

          <ol v-else-if="d.type === 'steps'" class="space-y-2.5">
            <li v-for="(s, i) in d.items" :key="s" class="flex gap-3.5">
              <span class="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-bg">{{ i + 1 }}</span>
              <span class="pt-0.5 text-muted">{{ s }}</span>
            </li>
          </ol>

          <p v-else class="flex gap-3 rounded-2xl border border-line bg-surface p-4 text-muted">
            <Icon name="lock" class="mt-0.5 size-5 shrink-0 text-coral" />
            <span>{{ d.text }}</span>
          </p>
        </div>
      </div>

      <div class="relative flex justify-center" :class="index % 2 === 1 ? 'lg:order-1' : ''" v-reveal="120">
        <div
          class="absolute left-1/2 top-1/2 -z-10 size-[26rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
          :class="feature.accent === 'coral' ? 'bg-coral/25' : 'bg-indigo/30'"
          aria-hidden="true"
        ></div>
        <slot name="visual" />
      </div>
    </div>
    <p class="sr-only">Feature {{ index + 1 }} of {{ total }}</p>
  </section>
</template>
