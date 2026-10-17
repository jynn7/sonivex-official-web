<script setup lang="ts">
import type { ScreenKey } from '@/data/features'
import DeviceFrame from './DeviceFrame.vue'
import DesignShowcase from './DesignShowcase.vue'
import AiScreen from './screens/AiScreen.vue'
import AutoScreen from './screens/AutoScreen.vue'
import LibraryScreen from './screens/LibraryScreen.vue'
import LinksScreen from './screens/LinksScreen.vue'
import PlaybackScreen from './screens/PlaybackScreen.vue'
import VideoScreen from './screens/VideoScreen.vue'

defineProps<{ screen: ScreenKey }>()
</script>

<template>
  <DesignShowcase v-if="screen === 'player'" />

  <DeviceFrame v-else-if="screen === 'library'" media-key="library" label="The Sonivex library with search, favourites and a floating player">
    <LibraryScreen />
  </DeviceFrame>
  <DeviceFrame v-else-if="screen === 'playback'" media-key="playback" label="Notification controls, queue editing, equalizer and swipe-to-stop with undo">
    <PlaybackScreen />
  </DeviceFrame>
  <DeviceFrame v-else-if="screen === 'ai'" media-key="ai" label="Made for you banner and a prompt-based AI playlist">
    <AiScreen />
  </DeviceFrame>
  <DeviceFrame v-else-if="screen === 'auto'" kind="car" media-key="auto" label="Sonivex now-playing on an Android Auto car display">
    <AutoScreen />
  </DeviceFrame>
  <DeviceFrame v-else-if="screen === 'video'" kind="landscape" media-key="video" label="Full-screen video with gesture hints and the Video info sheet">
    <VideoScreen />
  </DeviceFrame>
  <DeviceFrame v-else-if="screen === 'links'" media-key="links" label="Opening an HLS link directly from the host">
    <LinksScreen />
  </DeviceFrame>
</template>
