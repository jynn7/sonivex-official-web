<script setup lang="ts">
import { vReveal } from '@/composables/vReveal'
import { useScrollProgress } from '@/composables/useScrollProgress'
import { features } from '@/data/features'
import DownloadSection from '@/components/DownloadSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import FeatureVisual from '@/components/FeatureVisual.vue'
import HeroSection from '@/components/HeroSection.vue'
import MiniDock from '@/components/MiniDock.vue'
import PrivacySection from '@/components/PrivacySection.vue'
import SettingsSection from '@/components/SettingsSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'

const { progress, pastHero } = useScrollProgress()
// Features 1-7 sit before the privacy section; the rest of the page follows it.
</script>

<template>
  <SiteHeader :progress="progress" />

  <main>
    <HeroSection />

    <div id="features" class="pt-10">
      <div class="mx-auto max-w-3xl px-5 text-center sm:px-8" v-reveal>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-coral">The tracklist</p>
        <h2 class="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Seven things it does, all of them on your device.
        </h2>
      </div>

      <FeatureSection v-for="(f, i) in features" :key="f.id" :feature="f" :index="i" :total="features.length">
        <template #visual><FeatureVisual :screen="f.screen" /></template>
      </FeatureSection>
    </div>

    <PrivacySection />
    <SettingsSection />
    <DownloadSection />
  </main>

  <SiteFooter />
  <MiniDock :show="pastHero" />
</template>
