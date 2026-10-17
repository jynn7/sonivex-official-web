/// <reference types="vite/client" />

/**
 * Everything the site reads from `.env`. Vite inlines these at build time, so on Cloudflare Pages
 * set them under Settings > Variables and Secrets (Production and Preview) and redeploy.
 */
interface ImportMetaEnv {
  readonly VITE_PLAY_STORE_URL?: string
  readonly VITE_APK_URL?: string
  readonly VITE_PRIVACY_POLICY_URL?: string
  readonly VITE_SITE_URL?: string
  readonly VITE_APP_NAME?: string
  readonly VITE_APP_TAGLINE?: string
  readonly VITE_APP_VERSION?: string
  readonly VITE_MIN_ANDROID?: string
  readonly VITE_SUPPORT_EMAIL?: string
  readonly VITE_DEVELOPER_NAME?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
