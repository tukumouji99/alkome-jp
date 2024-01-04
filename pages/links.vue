<template>
  <div class="container mx-auto">
    <p class="text-4xl font-black py-4">Links</p>
    <ul class="text-2xl">
      <li class="">
        <div class="hover:text-[#1da1f2]"><a href="https://twitter.com/Alkome0x63" target="_blank">
            <span class="social-logo-twitter"></span>
            Twitter
          </a>
        </div>
      </li>
      <li class="">
        <div class="hover:text-[#F26F23]"><a href="https://soundcloud.com/alkome" target="_blank">
            <span class="social-logo-youtube"></span>
            SoundCloud
          </a>
        </div>
      </li>
      <li class="">
        <div class="hover:text-[#FF0000]"><a href="https://www.youtube.com/channel/UCQSR1orJCx-jj-WKN9LYBfw"
            target="_blank">
            <span class="social-logo-youtube"></span>
            YouTube
          </a>
        </div>
      </li>
      <li class="">
        <div class="hover:text-[#1DB954]"><a
            href="https://open.spotify.com/intl-ja/artist/7sWyxKuT17pk8s5aD7Iqwg?si=pkNGSKklQQSLL3GqGiMbAw"
            target="_blank">
            <span class="social-logo-spotify"></span>
            Spotify
          </a>
        </div>
      </li>
      <li class="hover:text-[#629aa9]">
        <div class=""><a href="https://alkome.bandcamp.com/" target="_blank">
            <span class="social-logo-bandcamp"></span>
            Bandcamp
          </a>
        </div>
      </li>
      <li class="hover:text-[#76e16f]">
        <div class=""><a href="https://linktr.ee/alkome" target="_blank">
            <span class="social-logo-bandcamp"></span>
            Linktree
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-width {
  width: fit-content;
  margin: auto;
}

span {
  @apply block
}

span.title {
  @apply text-base
}

.note {
  @apply text-sm
}

li {
  @apply py-1.5
}
</style>