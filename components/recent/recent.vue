<template>
  <div class="container mx-auto">
    <p class="text-4xl font-black py-4">Recent</p>
    <div class="">
      <div class="video ">
        <iframe width="100%" height="100%"
          src="https://www.youtube.com/embed/videoseries?si=NsvKq_rM10ed6QGO&amp;list=PLDcriLXfHEdH0DsPLIbWXivkm7TCHAYkF"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <div class="flex h-[18rem] justify-between py-4 redirection">
        <div class="w-full">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yMgHTNjtClg?si=P0OOrbQaUyGSmfpx"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="w-full ">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yRgk6X7hEg4?si=itgb0OuWdqHLrYYA"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="w-full ">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nkKQfOcS7Yk?si=rMp80xdWuYP6XWMg"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video {
  width: 100%;
  position: relative;
  padding-top: 33%;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 767px) {
  .redirection {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /*追加*/
    height: 100%;
    /*追加*/
    margin: auto;
  }
}
</style>