# Sonivex official website

Static marketing site for the Sonivex Android app. Vue 3 + Vite + Tailwind CSS v4, built to plain
files in `dist/` and hosted on Cloudflare Pages.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve dist/ locally
```

## Download links come from `.env`

No link is written into the code. Copy `.env.example` to `.env` and edit it:

| Variable | What it does |
|---|---|
| `VITE_PLAY_STORE_URL` | Shows the "Get it on Google Play" button |
| `VITE_APK_URL` | Shows a "Download APK" button (direct download). Absolute URL, or a path such as `/downloads/sonivex.apk` |
| `VITE_PRIVACY_POLICY_URL` | Privacy policy link (privacy section and footer) |
| `VITE_SITE_URL` | This site's public address, for share-card tags (optional) |
| `VITE_APP_NAME`, `VITE_APP_TAGLINE`, `VITE_APP_VERSION`, `VITE_MIN_ANDROID` | App facts for the header, hero and download section |
| `VITE_SUPPORT_EMAIL`, `VITE_DEVELOPER_NAME` | Support and footer details |

Set both download variables to show both buttons, one to show just that one, or none to show a
"Coming soon" badge. Blank or invalid values are ignored. `src/config.ts` is the only file that reads them.

Vite bakes these in **at build time**, so after changing one, rebuild (locally) or redeploy (Cloudflare).

## Deploy on Cloudflare Pages

1. Push this folder to a Git repository and create a Pages project from it
   (Workers & Pages > Create > Pages > Connect to Git).
2. Build command `npm run build`, output directory `dist`, Node 22 or newer.
3. Under Settings > Variables and Secrets, add the `VITE_*` variables above for Production
   (and Preview if you use it), then redeploy.

Or deploy from your machine: `npm run build && npx wrangler pages deploy dist`.

### Hosting the APK on this site

Put the file in `public/downloads/` (for example `public/downloads/sonivex.apk`), set
`VITE_APK_URL=/downloads/sonivex.apk`, and redeploy. `public/_headers` already serves that folder as an
APK download. Cloudflare Pages limits a single file to 25 MiB; for a larger APK host it on GitHub
Releases or Cloudflare R2 and put that URL in `VITE_APK_URL`.

## Screenshots and clips

The phone, car and video screens are illustrated in code. To show your real captures instead, drop
files named after the feature (`library`, `playback`, `player`, `ai`, `auto`, `video`, `links`, `hero`;
.png .jpg .webp .mp4 .webm) into `src/assets/screens/` and rebuild. See the README in that folder.

## Content

Copy for the seven features, the privacy cards and the settings list is in `src/data/features.ts`.
Brand colours and the theme are in `src/style.css`. Brand files in `public/brand/` come from the app's
`assets/sonivex` pack.
