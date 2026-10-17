import { site } from '@/config'

export type ScreenKey = 'library' | 'playback' | 'player' | 'ai' | 'auto' | 'video' | 'links'

export type Detail =
  | { type: 'chips'; label: string; items: string[] }
  | { type: 'facts'; label: string; items: { k: string; v: string }[] }
  | { type: 'steps'; label: string; items: string[] }
  | { type: 'note'; label: string; text: string }

export interface Feature {
  id: string
  kicker: string
  title: string
  lead: string
  points: string[]
  details: Detail[]
  screen: ScreenKey
  accent: 'coral' | 'indigo'
}

export const features: Feature[] = [
  {
    id: 'library',
    kicker: 'Local music library',
    title: 'The music you already own, ready the moment you open it.',
    lead: 'Sonivex scans the audio files on your device automatically. No uploads, no importing, no streaming subscription.',
    points: [
      'Search your whole library as you type',
      'Favourites, playlists and listening history',
      'A saved queue that is waiting when you come back',
      'Hide short tracks: voice notes and clips under 30 seconds stay out of your songs',
    ],
    details: [
      {
        type: 'chips',
        label: 'Plays',
        items: ['MP3', 'AAC / M4A', 'FLAC', 'Ogg Vorbis', 'Opus', 'WAV'],
      },
      {
        type: 'note',
        label: 'The one permission it asks for',
        text: 'Access to music and audio files (“Files and media” on Android 10 to 12). Sonivex needs it to find the songs on your phone, and uses it to read them, never to change or upload them.',
      },
    ],
    screen: 'library',
    accent: 'coral',
  },
  {
    id: 'playback',
    kicker: 'Music playback',
    title: 'Playback that behaves, in the background and out of the way.',
    lead: 'Lock your phone and the music keeps going, with a notification to pause, skip and scrub.',
    points: [
      'Shuffle and repeat modes, with a queue you can reorder and edit',
      'Crossfade blends one song into the next',
      'Stable volume levels out loud and quiet tracks',
      'A built-in equalizer to shape the sound',
      'Swipe the mini-player away to stop playback, and tap Undo if you slipped',
    ],
    details: [
      {
        type: 'chips',
        label: 'Controls',
        items: ['Notification controls', 'Shuffle', 'Repeat', 'Queue editing', 'Crossfade', 'Equalizer'],
      },
    ],
    screen: 'playback',
    accent: 'indigo',
  },
  {
    id: 'design',
    kicker: 'Player design',
    title: 'A floating, glassy player that borrows its colours from the cover.',
    lead: 'A floating mini player and navigation bar sit over your music instead of boxing it in. Open the full player and a disc turns while an arc traces the song’s progress.',
    points: [
      'Floating mini player and floating navigation bar',
      'Disc player with an arc progress bar',
      'Colours are lifted from the album art, so every song looks different',
      'Light, dark, or follow your system theme',
    ],
    details: [],
    screen: 'player',
    accent: 'coral',
  },
  {
    id: 'ai',
    kicker: 'AI mixes · on device',
    title: 'Describe a mood. Get a playlist. Nothing leaves your phone.',
    lead: 'Pick “More like this” on any song, or type a prompt like “rainy day study”. The AI runs entirely on your device: no server, and none of your data is sent.',
    points: [
      '“More like this” from any song',
      'Prompt-based playlists from a few words',
      'A “Made for you” banner on Home keeps fresh mixes close',
      'Turn it off any time in Settings, under “Smart mixes”',
    ],
    details: [
      {
        type: 'facts',
        label: 'Good to know',
        items: [
          { k: 'One-time download', v: 'A 485 MB on-device model, fetched once. Wi-Fi is a good idea.' },
          { k: 'After that', v: 'Works offline. Your music never leaves the phone.' },
          { k: 'Needs', v: `A 64-bit processor and Android ${site.minAndroid} or later` },
        ],
      },
    ],
    screen: 'ai',
    accent: 'indigo',
  },
  {
    id: 'auto',
    kicker: 'Android Auto',
    title: 'Your library on the car screen, with your voice in charge.',
    lead: 'Sonivex shows up as a media app in Android Auto. Browse your library, see what is playing, search, or just ask.',
    points: [
      'Browse your library, playlists and favourites',
      'A now-playing screen built for the car',
      'Search from the car display',
      'Voice commands: “Hey Google, play …”',
    ],
    details: [
      {
        type: 'steps',
        label: 'How to enable it',
        items: [
          'Install Sonivex and open it once on your phone, and allow music access.',
          'Connect your phone to your car with Android Auto, by cable or wirelessly.',
          'Open the media apps on the car screen and choose Sonivex.',
          'Installed from the APK instead of Google Play? Also turn on “Unknown sources” in Android Auto’s developer settings.',
        ],
      },
      {
        type: 'note',
        label: 'Cars and head units',
        text: 'Works with cars and aftermarket head units that support Android Auto. Cars that run Android natively (Android Automotive OS) are not supported yet.',
      },
    ],
    screen: 'auto',
    accent: 'coral',
  },
  {
    id: 'video',
    kicker: 'Video player',
    title: 'A proper video player, tucked inside your music app.',
    lead: 'Open a video from the file picker, or from any file manager with “Open with”. It goes full screen with gesture controls.',
    points: [
      'Full-screen player with gesture controls',
      'A “Video info” sheet with the file’s details',
      'A Videos tab that lists what you opened',
      'No storage permission needed for video',
    ],
    details: [],
    screen: 'video',
    accent: 'indigo',
  },
  {
    id: 'links',
    kicker: 'Open links and streams',
    title: 'Paste a link and press play.',
    lead: 'Type, paste or share an https link from your browser straight into Sonivex.',
    points: [
      'Type it in, paste it, or use Share from a browser',
      'Links connect directly to the host’s server, never through Sonivex',
    ],
    details: [
      {
        type: 'chips',
        label: 'Supported',
        items: ['Direct audio & video files', 'HLS streams', 'DASH streams'],
      },
    ],
    screen: 'links',
    accent: 'coral',
  },
]

export const privacyPromises = [
  { title: 'No account', text: 'Open the app and play. There is nothing to sign up for.' },
  { title: 'No login', text: 'No email, no password, no profile to keep track of.' },
  { title: 'No ads', text: 'Not now, not later. Your music is the only thing on screen.' },
  { title: 'No tracking', text: 'No analytics and no trackers watching what you play.' },
] as const

export const settingsItems = [
  { title: 'Theme', text: 'Light, dark, or follow the system' },
  { title: 'Smart mixes', text: 'AI playlists on, or off completely' },
  { title: 'Crossfade', text: 'Blend songs together' },
  { title: 'Stable volume', text: 'Even out loudness between songs' },
  { title: 'Hide short tracks', text: 'Skip anything under 30 seconds' },
  { title: 'Updates', text: 'Check for a new version without leaving the app' },
  { title: 'Open-source licences', text: 'The projects Sonivex is built with' },
] as const

