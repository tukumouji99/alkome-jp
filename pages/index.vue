<template>
  <div class="w-screen, object-cover, flex justify-center">
    <img src="~/assets/imgs/Alkome_soundcloud_header.png">
  </div>
  <works />
  <contact />
  <links />
</template>

<script>
import works from '~/pages/works.vue'
import contact from '~/pages/contact.vue'
import links from '~/pages/links.vue'

export default {
  components: {
    works,
    contact,
    links
  }
}
</script>