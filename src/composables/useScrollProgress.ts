import { onBeforeUnmount, onMounted, ref } from 'vue'

/** 0..1 of the page scrolled, for the scrubber under the header. */
export function useScrollProgress() {
  const progress = ref(0)
  const pastHero = ref(false)
  let frame = 0

  function update() {
    frame = 0
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    pastHero.value = window.scrollY > window.innerHeight * 0.8
  }

  function onScroll() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    if (frame) cancelAnimationFrame(frame)
  })

  return { progress, pastHero }
}
