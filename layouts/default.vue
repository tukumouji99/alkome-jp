<!-- <template v-if="spNavFlag">
  <Spnav @clickSpNav="clickSpNav" />
</template> -->

<template>
  <div>
    <header-section />
  </div>

  <slot />
</template>

<script>
import header from '~/components/header.vue'
import spnav from "~/components/spnav.vue"

export default {
  data() {
    return {
      spNavFlag: false
    };
  },

  components: {
    headerSection: header,
    spnav
  },
  methods: {
    clickSpNav() {
      this.spNavFlag = !this.spNavFlag;
    }
  },
  watch: {
    $route() {
      if (this.spNavFlag) {
        this.spNavFlag = false;
      }
    }
  }
}
</script>