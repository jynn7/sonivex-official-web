<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Table of contents styled as a tracklist: each section gets a read time, and the one being read
 * shows a tiny equalizer. On small screens it becomes a drop-down opened from the header.
 */
const props = defineProps<{ sections: { id: string; title: string }[]; open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const WORDS_PER_MINUTE = 220
// A section counts as "current" once its top passes this line (header height plus a margin).
const READING_LINE = 64 + 40

const times = ref<string[]>(props.sections.map(() => ''))
const summary = ref(`${props.sections.length} sections`)
const currentIndex = ref(-1)
let frame = 0

function format(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  return `${minutes}:${String(totalSeconds % 60).padStart(2, '0')}`
}

function readTimes() {
  let total = 0
  times.value = props.sections.map((s) => {
    const text = document.getElementById(s.id)?.textContent?.trim() ?? ''
    const words = text ? text.split(/\s+/).length : 0
    const seconds = Math.round((words / WORDS_PER_MINUTE) * 60)
    total += seconds
    return format(seconds)
  })
  summary.value = `${props.sections.length} sections, about ${Math.max(1, Math.round(total / 60))} minutes to read`
}

function findCurrent() {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    return props.sections.length - 1
  }
  let current = -1
  props.sections.forEach((s, i) => {
    const el = document.getElementById(s.id)
    if (el && el.getBoundingClientRect().top <= READING_LINE) current = i
  })
  return current
}

function onScroll() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    currentIndex.value = findCurrent()
  })
}

onMounted(() => {
  readTimes()
  currentIndex.value = findCurrent()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <nav
    id="tracklist"
    aria-label="Contents"
    class="min-[961px]:sticky min-[961px]:top-24 min-[961px]:max-h-[calc(100dvh-8rem)] min-[961px]:overflow-y-auto max-[960px]:fixed max-[960px]:inset-x-0 max-[960px]:top-16 max-[960px]:z-40 max-[960px]:max-h-[calc(100dvh-4rem)] max-[960px]:overflow-y-auto max-[960px]:border-b max-[960px]:border-line max-[960px]:bg-bg max-[960px]:px-5 max-[960px]:pb-6 max-[960px]:pt-4 max-[960px]:transition max-[960px]:duration-200 sm:max-[960px]:px-8"
    :class="open ? '' : 'max-[960px]:invisible max-[960px]:-translate-y-2 max-[960px]:opacity-0'"
    @click="(e) => (e.target as HTMLElement).closest('a') && emit('close')"
  >
    <h2 class="mb-1 text-xl font-semibold">Contents</h2>
    <p class="mb-4 text-[0.95rem] leading-snug text-muted">{{ summary }}</p>
    <ol class="m-0 list-none p-0">
      <li v-for="(s, i) in sections" :key="s.id">
        <a
          :href="`#${s.id}`"
          class="group grid grid-cols-[28px_minmax(0,1fr)_auto] items-baseline gap-2 border-t border-line py-2.5 pr-1 leading-snug text-muted transition hover:text-ink"
          :aria-current="i === currentIndex ? 'true' : undefined"
          :class="i === currentIndex ? '!text-ink font-medium' : ''"
        >
          <span class="relative text-[0.85rem] tabular-nums">
            <span class="transition-opacity" :class="i === currentIndex ? 'opacity-0' : ''">{{ String(i + 1).padStart(2, '0') }}</span>
            <span
              class="absolute bottom-[3px] left-0 flex h-3.5 items-end gap-0.5 transition-opacity"
              :class="i === currentIndex ? 'opacity-100' : 'opacity-0'"
              aria-hidden="true"
            >
              <span class="h-full w-[3px] origin-bottom animate-eq rounded-sm bg-coral"></span>
              <span class="h-full w-[3px] origin-bottom animate-eq rounded-sm bg-indigo [animation-delay:-0.3s]"></span>
              <span class="h-full w-[3px] origin-bottom animate-eq rounded-sm bg-coral [animation-delay:-0.6s]"></span>
            </span>
          </span>
          <span>{{ s.title }}</span>
          <span class="text-[0.85rem] tabular-nums">{{ times[i] }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>
