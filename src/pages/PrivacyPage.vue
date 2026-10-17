<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { site } from '@/config'
import { useScrollProgress } from '@/composables/useScrollProgress'
import LedgerRow from '@/components/privacy/LedgerRow.vue'
import PolicyHeader from '@/components/privacy/PolicyHeader.vue'
import PolicyTracklist from '@/components/privacy/PolicyTracklist.vue'

// Contents labels, in page order (each id matches a <section> below).
const sections = [
  { id: 'who', title: 'Who we are' },
  { id: 'data', title: 'What Sonivex stores' },
  { id: 'ai', title: 'How the AI works' },
  { id: 'network', title: 'When the app goes online' },
  { id: 'content', title: 'Files and links you open' },
  { id: 'not-collected', title: 'What we do not collect' },
  { id: 'permissions', title: 'Permissions' },
  { id: 'sharing', title: 'Sharing and third parties' },
  { id: 'retention', title: 'How long data is kept' },
  { id: 'backups', title: 'Backups' },
  { id: 'choices', title: 'Your choices and rights' },
  { id: 'security', title: 'Security' },
  { id: 'children', title: 'Children' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact' },
]

const glance = [
  {
    title: 'No account.',
    text: 'You never sign up or log in, and we never ask for your name, email, or phone number.',
  },
  {
    title: 'Your music stays on your device.',
    text: 'Sonivex does not upload your songs, your library, or your playlists anywhere.',
  },
  {
    title: 'No ads, analytics, or tracking.',
    text: 'The app has no advertising or analytics code and sends us no usage data or crash reports.',
  },
  {
    title: 'Online only when you ask.',
    text: 'The AI runs on your device. Sonivex goes online only to download its AI model, once, after you confirm, and to play a link you enter or open yourself.',
    online: true,
  },
]

const contactEmail = site.supportEmail ?? 'cheahjynn@gmail.com'

const { progress } = useScrollProgress()

// Contents drop-down on small screens
const menuOpen = ref(false)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && menuOpen.value) menuOpen.value = false
}
function onDocClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (menuOpen.value && !target.closest('#tracklist')) menuOpen.value = false
}
function onResize() {
  if (window.innerWidth >= 961) menuOpen.value = false
}

onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.addEventListener('click', onDocClick)
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.removeEventListener('click', onDocClick)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <PolicyHeader :progress="progress" :menu-open="menuOpen" @toggle-menu="menuOpen = !menuOpen" />
  <div id="top"></div>

  <section class="relative isolate overflow-hidden py-14 sm:py-24">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute -left-40 -top-40 size-[34rem] rounded-full blur-[110px]" style="background: var(--aurora-a)"></div>
      <div class="absolute -right-44 -top-10 size-[36rem] rounded-full blur-[120px]" style="background: var(--aurora-b)"></div>
    </div>
    <div class="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-8 px-5 sm:gap-12 sm:px-8">
      <div>
        <h1 class="max-w-[13ch] text-[clamp(2.75rem,7.5vw,5.5rem)] font-medium leading-none tracking-[-0.035em] animate-[fade-in_0.7s_ease_both]">
          Your music stays on your device.<span class="sr-only"> Sonivex privacy policy.</span>
        </h1>
        <p class="mt-7 max-w-[34em] text-[clamp(1.15rem,2vw,1.375rem)] leading-relaxed animate-[fade-in_0.7s_0.1s_ease_both]">
          Sonivex plays the songs and videos you choose, from your device or from a link you enter. It has no
          accounts, no ads, and no analytics, and its AI playlists run on your device too.
        </p>
        <p class="mt-5 text-[0.95rem] text-muted animate-[fade-in_0.7s_0.2s_ease_both]">
          Last updated October 17, 2026. Applies to Sonivex for Android version 0.0.1 and later.
        </p>
      </div>

      <!-- The logo's two offset capsules, enlarged -->
      <div class="w-[clamp(96px,16vw,188px)]" aria-hidden="true">
        <svg viewBox="0 0 154 203" class="block h-auto w-full overflow-visible">
          <rect class="animate-[rise_0.9s_cubic-bezier(0.2,0.8,0.2,1)_both] [transform-box:fill-box]" x="0" y="0" width="56" height="168" rx="28" fill="#FF6B4A" />
          <rect class="animate-[rise_0.9s_0.15s_cubic-bezier(0.2,0.8,0.2,1)_both] [transform-box:fill-box]" x="98" y="35" width="56" height="168" rx="28" fill="#5B5BF0" />
        </svg>
      </div>
    </div>
  </section>

  <div class="mx-auto grid max-w-6xl items-start gap-[clamp(2rem,6vw,5.5rem)] px-5 pb-24 sm:px-8 min-[961px]:grid-cols-[280px_minmax(0,1fr)]">
    <PolicyTracklist :sections="sections" :open="menuOpen" @close="menuOpen = false" />

    <main class="policy">
      <section class="mb-2" aria-labelledby="glance-title">
        <h2 id="glance-title" class="mb-4 text-2xl font-semibold tracking-tight">The short version</h2>
        <ul class="m-0 list-none border-t border-line p-0">
          <li v-for="g in glance" :key="g.title" class="relative border-b border-line py-5 pl-8">
            <span
              class="absolute left-0 top-[1.65rem] h-[26px] w-2.5 rounded-full"
              :class="g.online ? 'bg-indigo' : 'bg-coral'"
              aria-hidden="true"
            ></span>
            <strong class="block font-sans text-xl font-medium">{{ g.title }}</strong>
            <p class="m-0 text-muted">{{ g.text }}</p>
          </li>
        </ul>
        <p class="mt-3.5 font-sans text-[0.95rem] text-muted">Coral marks stay on your device. Indigo marks touch the internet.</p>
      </section>

      <section class="policy-section" id="who">
        <h2>Who we are</h2>
        <p>Sonivex is an Android music player developed by <strong>jynn7</strong> ("we", "us"). This policy explains what the app does with information when you use it. It covers the Sonivex app (package name <code>com.jynn7.sonivex</code>) and this web page.</p>
        <p>Sonivex has no servers of its own and no user accounts, so we do not hold personal information about you. Everything described below happens on your device unless we say otherwise.</p>
      </section>

      <section class="policy-section" id="data">
        <h2>What Sonivex stores on your device</h2>
        <p>To work as a music player, Sonivex reads your audio library and keeps a small database on your phone. This data lives in the app's private storage and is not sent to us.</p>

        <div class="my-7 border-t border-line">
          <LedgerRow term="Library details">
            <p>For each song found by Android's media scanner: title, artist, album, track number, year, duration, file size, last-modified date, and the file's location on your device. Album art is loaded directly from your files.</p>
            <p class="muted">Used to show your library and play your music.</p>
          </LedgerRow>
          <LedgerRow term="Files and links you open">
            <p>For a video or audio file you pick or open with Sonivex: its name and a reference to where it is. For a link you enter: the full address, including anything after the "?" in it. If you add these to your queue or a playlist, they are saved with it.</p>
            <p class="muted">Used to play them again and to resume your queue. See <a href="#content">Files and links you open</a>.</p>
          </LedgerRow>
          <LedgerRow term="Favourites and playlists">
            <p>Which songs you marked as favourites and when, plus the names, contents, and order of your playlists.</p>
            <p class="muted">Used to keep your collections between sessions.</p>
          </LedgerRow>
          <LedgerRow term="Listening activity">
            <p>Play counts, when a song was last played, and a history of listens (which song, when, and how far you got).</p>
            <p class="muted">Used to show recently and most-played songs and to tune AI mixes to your taste.</p>
          </LedgerRow>
          <LedgerRow term="Playback state">
            <p>Your current queue, the song you were on, and your position in it.</p>
            <p class="muted">Used to resume where you left off.</p>
          </LedgerRow>
          <LedgerRow term="AI song fingerprints">
            <p>For each analysed song, a list of 256 numbers describing how it sounds. This is not audio and cannot be turned back into the song.</p>
            <p class="muted">Used to find similar songs and build AI playlists.</p>
          </LedgerRow>
          <LedgerRow term="AI model file">
            <p>A downloaded model file of about 485 MB, stored in the app's private storage.</p>
            <p class="muted">Used to run the AI features on your device.</p>
          </LedgerRow>
        </div>
      </section>

      <section class="policy-section" id="ai">
        <h2>How the AI features work</h2>
        <p>Sonivex can build "Made for you" playlists in two ways: from a song you pick ("More like this") or from a short description you type (for example, "rainy day study"). Both run entirely on your device using an open model called EmbeddingGemma and Google's LiteRT-LM runtime, which are bundled with or downloaded into the app.</p>
        <ul>
          <li><strong>Song analysis.</strong> The app decodes a short clip (about 30 seconds) of each song in memory, converts it to numbers, and stores only those numbers. The clip itself is not saved, copied, or uploaded.</li>
          <li><strong>Your descriptions.</strong> Text you type is used on your device to find matching songs. It is not sent anywhere. If you create a playlist from a description, the text is saved on your device as that playlist's name.</li>
          <li><strong>Personalisation.</strong> Mixes can take your play counts and favourites into account. That information never leaves your device.</li>
        </ul>
      </section>

      <section class="policy-section" id="network">
        <h2>When the app uses the internet</h2>
        <p>Sonivex works offline. It requests internet access for two purposes only: <strong>downloading the AI model</strong> and <strong>playing a link you enter or open</strong> (see <a href="#content">Files and links you open</a>). The model download works like this.</p>

        <ol class="my-7 max-w-[64ch] list-none p-0">
          <li class="relative m-0 pb-7 pl-14">
            <span class="absolute left-0 top-0 grid size-9 place-items-center rounded-full bg-indigo font-sans font-medium text-white">1</span>
            <span class="absolute bottom-2 left-[17px] top-11 w-0.5 bg-line" aria-hidden="true"></span>
            <strong class="block font-sans text-[1.15rem] font-medium">You confirm the download</strong>
            <p class="m-0">The download starts only after you choose AI mixes and confirm in a dialog that says it will download a 485 MB file once, over your current connection.</p>
          </li>
          <li class="relative m-0 pb-7 pl-14">
            <span class="absolute left-0 top-0 grid size-9 place-items-center rounded-full bg-indigo font-sans font-medium text-white">2</span>
            <span class="absolute bottom-2 left-[17px] top-11 w-0.5 bg-line" aria-hidden="true"></span>
            <strong class="block font-sans text-[1.15rem] font-medium">The app fetches the file</strong>
            <p class="m-0">It is requested over HTTPS from Hugging Face (<code>huggingface.co</code>), which may hand the download to its content delivery network.</p>
          </li>
          <li class="relative m-0 pl-14">
            <span class="absolute left-0 top-0 grid size-9 place-items-center rounded-full bg-indigo font-sans font-medium text-white">3</span>
            <strong class="block font-sans text-[1.15rem] font-medium">The app checks the file</strong>
            <p class="m-0">It compares the file against a fixed checksum to make sure it was not corrupted or altered, then keeps it in the app's private storage.</p>
          </li>
        </ol>

        <p>The request contains no information about you, your music, or your playlists. As with any website or download, Hugging Face and its network providers can see your IP address and basic technical details of the request. Their handling of that information is covered by the <a href="https://huggingface.co/privacy" target="_blank" rel="noopener noreferrer">Hugging Face privacy policy</a>.</p>
        <p>Because the download is large, you may want to be on Wi-Fi when you start it.</p>
      </section>

      <section class="policy-section" id="content">
        <h2>Files and links you open</h2>
        <p>Besides the music Android finds on your device, Sonivex can play video and audio that you choose yourself. This works in three ways:</p>
        <ul>
          <li><strong>Pick a file.</strong> You choose a file with Android's own file picker. Sonivex can read only the file you choose, not the rest of your storage, and needs no extra permission for this.</li>
          <li><strong>Open with Sonivex.</strong> You open a video or audio file from another app (such as a file manager) and choose Sonivex, or you share a link to Sonivex from a browser or another app. The app receives only that file or link.</li>
          <li><strong>Enter a link.</strong> You type or paste the web address of a video or audio file or stream. Sonivex opens only links that start with <code>https://</code>.</li>
        </ul>

        <h3>What happens when you play a link</h3>
        <p>Your device connects <strong>directly</strong> to the server that hosts the link. The request does not pass through us, and we never see it. That server, and any network or content delivery service it uses, can see your IP address, the address you requested, and basic technical details of the request. For streaming formats such as HLS or DASH, the player may also fetch pieces of the stream from other servers named by the stream itself. Each of those parties handles that information under its own privacy policy, which we do not control. Sonivex opens only <code>https://</code> links, which are encrypted on the way; the app cannot make a site's own practices safe.</p>

        <h3>What we do and do not provide</h3>
        <ul>
          <li>Sonivex is a player. We do not host, supply, recommend, or review any video or audio you open, and the app comes with no links or playlists of online content.</li>
          <li>You are responsible for making sure you have the right to play and view what you open, and for following the terms of the sites you connect to.</li>
          <li>Sonivex plays a stream as it arrives and does not keep a copy of it on your device.</li>
        </ul>

        <h3>What is kept on your device</h3>
        <p>Files and links you add to your queue or a playlist are saved on your device like any other song, so they can be played again and your queue can resume. A link may contain a private key or token in its address; it is saved as you entered it, so avoid saving links you would not want kept on your phone. You can remove any of them at any time (see <a href="#choices">Your choices and rights</a>).</p>
      </section>

      <section class="policy-section" id="not-collected">
        <h2>What we do not collect</h2>
        <p>Sonivex does not collect, receive, or transmit any of the following:</p>
        <ul>
          <li>Your name, email address, phone number, or any account or login details</li>
          <li>Your location</li>
          <li>Your contacts, camera, or microphone data, or any photos and videos other than the files you choose to open</li>
          <li>Advertising IDs or other device identifiers</li>
          <li>Usage analytics, behavioural profiles, or crash reports</li>
          <li>Your music or video files, library list, playlists, listening history, or the links you open</li>
        </ul>
        <p>The app contains no advertising, analytics, or tracking libraries.</p>
      </section>

      <section class="policy-section" id="permissions">
        <h2>Permissions the app asks for</h2>

        <div class="my-7 border-t border-line">
          <LedgerRow>
            <template #term><code>READ_MEDIA_AUDIO</code></template>
            <p>Lets Sonivex find and play the audio files on your device (Android 13 and later).</p>
          </LedgerRow>
          <LedgerRow>
            <template #term><code>READ_EXTERNAL_STORAGE</code></template>
            <p>The same purpose on Android 12L and earlier. Not requested on newer versions.</p>
          </LedgerRow>
          <LedgerRow online>
            <template #term><code>INTERNET</code></template>
            <p>Used only to download the AI model and to play links you enter or open, as described in <a href="#network">When the app uses the internet</a> and <a href="#content">Files and links you open</a>.</p>
          </LedgerRow>
          <LedgerRow>
            <template #term><code>FOREGROUND_SERVICE</code> and <code>FOREGROUND_SERVICE_MEDIA_PLAYBACK</code></template>
            <p>Lets playback continue in the background while the screen is off or you use another app.</p>
          </LedgerRow>
          <LedgerRow>
            <template #term><code>POST_NOTIFICATIONS</code></template>
            <p>Lets Sonivex show the playback controls in the notification shade (Android 13 and later). Sonivex does not send other notifications.</p>
          </LedgerRow>
          <LedgerRow>
            <template #term><code>WAKE_LOCK</code></template>
            <p>Keeps playback running while the screen is off.</p>
          </LedgerRow>
          <LedgerRow online>
            <template #term><code>ACCESS_NETWORK_STATE</code></template>
            <p>Lets the player see whether the connection is Wi-Fi or mobile data, so a stream you open is loaded sensibly. It reads the type of connection only, and sends nothing.</p>
          </LedgerRow>
        </div>

        <p>Sonivex needs the audio permission to show your music. You can withdraw it at any time in Android Settings, and the app will stop being able to read your library.</p>
        <p>Sonivex does not ask for permission to read your videos or photos. Files you pick or open with Sonivex are shared with the app one at a time by Android, so the app cannot see anything else in your storage.</p>
      </section>

      <section class="policy-section" id="sharing">
        <h2>Sharing and third parties</h2>
        <p>We do not sell, rent, or share your information, because we do not have it. The only outside parties involved are:</p>
        <ul>
          <li><strong>Hugging Face</strong>, which hosts the AI model file (see <a href="#network">When the app uses the internet</a>).</li>
          <li><strong>The servers behind links you open</strong>, which receive your requests directly from your device when you play a link (see <a href="#content">Files and links you open</a>). We choose none of them and receive nothing from them.</li>
          <li><strong>Google and your device maker</strong>, whose Android system, app store, and backup service operate under their own privacy policies if you use them to install Sonivex or back up your phone (see <a href="#backups">Backups</a>).</li>
        </ul>
        <p>We may disclose information only if the law requires it, but since we hold no personal data about you, we would have nothing to disclose.</p>
      </section>

      <section class="policy-section" id="retention">
        <h2>How long data is kept</h2>
        <ul>
          <li><strong>Listening history</strong> is automatically deleted after 90 days.</li>
          <li><strong>Songs that disappear from your device, and playlists you delete,</strong> are hidden from the app straight away and permanently erased from its database after about 30 days. This also removes the AI fingerprints and playlist entries linked to those songs.</li>
          <li><strong>Files and links you added</strong> to a playlist or queue stay until you remove them. Their entries in your listening history are deleted after 90 days like any other.</li>
          <li><strong>Everything else</strong> (favourites, playlists, AI fingerprints, the model file) stays until you remove it.</li>
          <li><strong>Uninstalling Sonivex</strong> deletes all of the app's data from your device.</li>
        </ul>
      </section>

      <section class="policy-section" id="backups">
        <h2>Backups</h2>
        <p>Sonivex allows Android's standard backup. If you have device backup turned on, the app's database (favourites, playlists, history, and AI fingerprints) may be saved to your Google account or moved to a new phone when you transfer data. Those copies are managed by Google or your device maker under your device settings, not by us. The large AI model file is excluded from backups and would be downloaded again if needed. You can turn backup off in your Android settings.</p>
      </section>

      <section class="policy-section" id="choices">
        <h2>Your choices and rights</h2>
        <p>You are in control of the data Sonivex keeps:</p>
        <ul>
          <li>Remove favourites and rename, edit, or delete playlists inside the app.</li>
          <li>Delete everything the app stores, including the AI model, by going to <em>Android Settings &gt; Apps &gt; Sonivex &gt; Storage</em> and choosing <em>Clear storage</em>, or by uninstalling the app.</li>
          <li>Decline the AI model download. Sonivex still works as a normal music player without it.</li>
          <li>Remove any file or link you added from your queue and playlists, or simply never enter a link. Sonivex plays your local music without going online.</li>
          <li>Revoke the audio permission in Android Settings at any time.</li>
        </ul>
        <p>Privacy laws in some places (for example the GDPR in Europe or the PDPA in Malaysia) give you rights to access, correct, or delete your personal data. Because we do not collect or hold your personal data, there is nothing for us to access or delete on our side, but you are welcome to <a href="#contact">contact us</a> with any question or request.</p>
      </section>

      <section class="policy-section" id="security">
        <h2>Security</h2>
        <p>Your data lives in Android's private app storage, which other apps cannot read under normal conditions. The AI model download uses an encrypted HTTPS connection and is verified before use. Links you open are only as secure as the address and site you choose, so prefer <code>https://</code> links. No method of storage is perfectly secure, so keep your device updated and protected with a screen lock.</p>
      </section>

      <section class="policy-section" id="children">
        <h2>Children</h2>
        <p>Sonivex is a general-audience music player and is not directed at children under 13. We do not knowingly collect personal information from anyone, including children.</p>
      </section>

      <section class="policy-section" id="changes">
        <h2>Changes to this policy</h2>
        <p>If the app changes in a way that affects your privacy (for example, adding a feature that connects to a new service), we will update this page and change the "Last updated" date above before that version is released. For significant changes, we will also say so in the app's release notes.</p>
      </section>

      <section class="policy-section" id="contact">
        <h2>Contact</h2>
        <p>If you have questions about this policy or how Sonivex handles data, email us at <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.</p>
      </section>
    </main>
  </div>

  <footer class="border-t border-line">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 pb-12 pt-7 text-[0.95rem] text-muted sm:px-8">
      <p class="m-0">&copy; {{ site.year }} Sonivex. All rights reserved.</p>
      <div class="flex gap-5">
        <a href="/" class="transition hover:text-ink">Back to site</a>
        <a href="#top" class="transition hover:text-ink">Back to top</a>
      </div>
    </div>
  </footer>
</template>
