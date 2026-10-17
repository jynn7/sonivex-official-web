<script setup lang="ts">
import { downloads, site } from '@/config'
import { vReveal } from '@/composables/vReveal'
import DownloadButtons from './DownloadButtons.vue'
import Icon from './Icon.vue'

const facts = [
  { k: 'Version', v: site.version },
  { k: 'Requires', v: `Android ${site.minAndroid} or later` },
  { k: 'AI mixes need', v: '64-bit processor' },
  { k: 'Developer', v: site.developer },
]
</script>

<template>
  <section id="download" class="px-3 pb-10 pt-8 sm:px-6 sm:pb-16" aria-labelledby="download-title">
    <div
      class="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-14 text-center shadow-2xl shadow-black/10 sm:rounded-[2.75rem] sm:px-14 sm:py-20"
      v-reveal
    >
      <div class="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full blur-[90px]" style="background: var(--aurora-a)" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -bottom-28 -right-20 size-96 rounded-full blur-[100px]" style="background: var(--aurora-b)" aria-hidden="true"></div>

      <div class="relative">
        <img src="/brand/app-icon.png" :alt="`${site.name} app icon`" width="96" height="96" class="mx-auto size-24 rounded-[1.6rem] shadow-xl shadow-black/25" />
        <h2 id="download-title" class="mt-7 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Take {{ site.name }} with you.
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-lg text-muted">{{ site.tagline }}</p>

        <div class="mt-9">
          <DownloadButtons center />
        </div>
        <p v-if="downloads.apkUrl" class="mx-auto mt-5 max-w-md text-sm text-muted">
          Installing the APK: open the downloaded file and, when Android asks, allow installs from your browser
          for this one time.
        </p>

        <dl class="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line text-left sm:grid-cols-4">
          <div v-for="f in facts" :key="f.k" class="bg-surface px-5 py-4">
            <dt class="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{{ f.k }}</dt>
            <dd class="mt-1 font-semibold">{{ f.v }}</dd>
          </div>
        </dl>

        <p v-if="site.supportEmail" class="mt-8 text-muted">
          Questions or feedback?
          <a :href="site.supportHref" class="inline-flex items-center gap-1.5 font-semibold text-link underline-offset-4 hover:underline">
            <Icon name="mail" class="size-4" /> {{ site.supportEmail }}
          </a>
        </p>
      </div>
    </div>
  </section>
</template>
