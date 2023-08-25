<template>
  <div>
    <ul class="sp-nav">
      <li>
        <nuxt-link active-class="link-active" to="/" exact>Home</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="link-active" to="/works">Works</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="link-active" to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.sp-nav {
  transform: translate(0, 66px);
  position: fixed;
  width: 100%;
  z-index: 9999;
  text-align: center;
  background: rgba(24, 24, 24, 0.9);

  & li {
    height: 50px;
    line-height: 50px;

    & a {
      display: block;
      color: #fff;
    }
  }

  & li:not(:last-of-type) {
    border-bottom: 1px dotted #fff;
  }
}</style>
