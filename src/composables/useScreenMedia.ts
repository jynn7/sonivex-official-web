/**
 * Real screenshots and clips override the built-in illustrations. Drop a file named after the feature
 * into `src/assets/screens/` (library, playback, player, ai, auto, video, links; .png .jpg .webp .mp4
 * .webm) and it replaces that feature's illustrated screen on the next build. See that folder's README.
 */
const files = import.meta.glob<string>('../assets/screens/*.{png,jpg,jpeg,webp,avif,mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export interface ScreenMedia {
  src: string
  kind: 'image' | 'video'
}

const byName = new Map<string, ScreenMedia>()
for (const [path, src] of Object.entries(files)) {
  const file = path.split('/').pop() ?? ''
  const name = file.replace(/\.[^.]+$/, '')
  byName.set(name, { src, kind: /\.(mp4|webm)$/i.test(file) ? 'video' : 'image' })
}

export function useScreenMedia(key: string): ScreenMedia | undefined {
  return byName.get(key)
}
