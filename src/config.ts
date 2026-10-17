/**
 * The single place the site reads `.env`. Nothing else uses `import.meta.env`, so a link can never
 * be hard-coded in a component: change the variable, rebuild, done.
 */

const env = import.meta.env

/** Trimmed value, or `undefined` when the variable is missing or blank. */
function read(value: string | undefined): string | undefined {
  const trimmed = value?.trim()
  return trimmed ? trimmed : undefined
}

/** Accepts absolute http(s) URLs and site-relative paths only, so a typo cannot become a `javascript:` link. */
function safeUrl(value: string | undefined): string | undefined {
  const url = read(value)
  if (!url) return undefined
  if (url.startsWith('/') && !url.startsWith('//')) return url
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.toString() : undefined
  } catch {
    return undefined
  }
}

const supportEmail = read(env.VITE_SUPPORT_EMAIL)

export const site = {
  name: read(env.VITE_APP_NAME) ?? 'Sonivex',
  tagline: read(env.VITE_APP_TAGLINE) ?? 'Your music, kept on your device.',
  version: read(env.VITE_APP_VERSION) ?? '0.0.3',
  minAndroid: read(env.VITE_MIN_ANDROID) ?? '10',
  developer: read(env.VITE_DEVELOPER_NAME) ?? 'Cheah Jynn',
  supportEmail,
  supportHref: supportEmail ? `mailto:${supportEmail}` : undefined,
  privacyUrl: safeUrl(env.VITE_PRIVACY_POLICY_URL),
  siteUrl: safeUrl(env.VITE_SITE_URL)?.replace(/\/$/, ''),
  year: new Date().getFullYear(),
} as const

export const downloads = {
  playStoreUrl: safeUrl(env.VITE_PLAY_STORE_URL),
  apkUrl: safeUrl(env.VITE_APK_URL),
} as const

/** True when at least one way to get the app is configured. */
export const hasDownload = Boolean(downloads.playStoreUrl || downloads.apkUrl)
