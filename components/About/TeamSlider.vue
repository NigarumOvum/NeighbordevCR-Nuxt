<template>
  <div class="bg-wrapper">
    <v-container>
      <h4 class="use-text-title2 mb-3">
        {{ $t('common.about_team') }}
      </h4>
      <p>Meet our team!</p>
    </v-container>
    <div class="carousel mt-15" v-if="loaded">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div
          v-for="(index) in 6"
          :key="index"
          class="item px-3"
        >
          <profile-card
            :connection="100"
            :favorites="10"
            :albums="12"
            cover="https://source.unsplash.com/random"
            name="Brealy Padron Rodriguez"
            title="Web Designer"
            type="full"
            orientation="landscape"
            avatar="/images/avatars/pp_girl3.svg"
          />
        </div>
      </slick>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import ProfileCard from '../Cards/ProfileCard'

export default {
  components: {
    ProfileCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
