<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <div
          class="soporte"
        >
          <Soporte />
        </div>

        <!-- <div
          class="page-section"
        >
          <counter dark />
        </div> -->
        <div
          id="testimonials"
          class="space-top"
        >
          <Testimonials />
        </div>
        <div
          id="pricing"
          class="space-top"
        >
          <pricing />
        </div>
        <div
          id="blog"
          class="space-top space-bottom"
        >
          <!-- <blog /> -->
        </div>
        <!-- <div id="subscribe">
          <subscribe />
        </div> -->
      </div>
      <main-footer />
      <hidden point="smDown">
        <corner />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import Header from '~/components/Header'
import Soporte from './body'
import Hidden from '~/components/Hidden'
import Testimonials from '~/components/Testimonials'
import Pricing from '~/components/Pricing'
// import Blog from '~/components/Blog'
// import Subscribe from '~/components/Subscribe'
import Footer from '~/components/Footer'
import Corner from '~/components/Corner'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    Hidden,
    Soporte,
    // Counter,
    Testimonials,
    Pricing,
    // Blog,
    // Subscribe,
    Corner,
    Notification,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.starter.name + ' - Soporte/Reparación'
    }
  }
}
</script>
