<template>
  <header class="header" ref="header">
    <div class="container">
      <nav>
        <ul class="gnav">
          <li>
            <NuxtLink to="/">TOP</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/works">WORKS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">CONTACT</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 30px 0;
  box-sizing: border-box;
  box-shadow: 0 0 2px #333;
  position: relative;
  width: 100%;
  z-index: 98;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .main-title {
      font-size: 4rem;
    }

    .gnav {
      display: flex;
      justify-content: space-between;

      & li:not(:last-of-type) {
        margin-right: 20px;
      }

      & a:hover {
        border-bottom: 2px solid black;
        transition: 0.2s;
      }

      & a:hover.gnav-fixed {
        border-bottom-color: #fff;
      }
    }
  }
}

.header-fixed {
  transition: 0.3s;
  background: rgba(24, 24, 24, 0.9);
  color: #fff;
}

.link-active.gnav-fixed {
  border-bottom: 2px solid #d35050;
}

.link-active {
  border-bottom: 2px solid black;
}

.sp-nav-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 3rem;
}
</style>