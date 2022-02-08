<template>
  <div class="feature-more">
    <v-container>
      <u-animate-container>
        <v-row id="feature1">
          <v-col md="6" class="px-6" cols="12">
            <div v-if="loaded" class="feature-item">
              <u-animate name="fadeInLeft" duration="0.6s">
                <h3 class="title-app display-2">
                  Mantenimiento Preventivo/Correctivo
                </h3>
              </u-animate>
              <u-animate name="fadeInLeft" delay="0.3s" duration="0.6s">
                <p class="text">
                  Es recomendado al menos 1 vez al año ejecutar una limpieza y
                  mantenimiento de hardware en tu laptop o pc para evitar
                  errores, recalentamiento, cortos circuitos, fallos de
                  periféricos y ralentización. Así mismo como un formateo del
                  sistema operativo, esto para ir eliminando colesterol de las
                  arterias del sistema operativo de Windows/Mac.
                </p>
              </u-animate>
            </div>
          </v-col>
          <v-col md="6" class="px-6" cols="12">
            <div v-if="loaded" class="feature-item">
              <u-animate name="zoomIn" delay="0.3s" duration="0.6s">
                <div class="deco1" />
              </u-animate>
              <u-animate name="fadeInRight" delay="0.5s" duration="0.6s">
                <figure class="img">
                  <img :src="imgAPI.photo[5]" alt="img" />
                </figure>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
      <u-animate-container>
        <v-row>
          <v-col md="6" class="px-6" cols="12">
            <div v-if="loaded" class="feature-item">
              <u-animate name="zoomIn" delay="0.3s" duration="0.6s">
                <div class="deco1" />
              </u-animate>
              <u-animate name="fadeInLeft" delay="0.5s" duration="0.6s">
                <figure class="img">
                  <img :src="imgAPI.photo[0]" alt="img" />
                </figure>
              </u-animate>
            </div>
          </v-col>
          <v-col md="6" class="px-6" cols="12">
            <div v-if="loaded" class="feature-item">
              <u-animate name="fadeInLeft" duration="0.6s">
                <h3 class="title-app display-2">
                  Diseño Web Responsivo e intuitivo
                </h3>
              </u-animate>
              <u-animate name="fadeInRight" delay="0.5s" duration="0.6s">
                <p class="text">
                  Contamos con la asesoría de profesionales para analizar la
                  logica de su negocio y diseñar una solución web 100%
                  personalizada.
                </p>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
      <u-animate-container>
        <v-row>
          <v-col md="12" class="px-6" cols="12">
            <div v-if="loaded" class="feature-item last text-center">
              <u-animate name="fadeInUp" duration="0.6s">
                <h3 class="title-app display-2">Marketing Digital</h3>
              </u-animate>
              <u-animate name="fadeInUp" duration="0.6s" delay="0.3s">
                <p class="text">
                  SEO, SEM, inbound marketing, AdWords, publicidad en Facebook,
                  publicidad en Google, publicidad en internet, marketing de
                  contenidos, email marketing… Nosotros dominamos todas estas
                  estrategias de marketing digital y creamos nuevas con base en
                  social media listening, para insertar a su marca en la
                  conversación en los temas que mueven a la web. Google
                  SEM Metrics 
                </p>
              </u-animate>
              <u-animate name="zoomIn" duration="0.6s" delay="0.3s">
                <div class="deco2" />
              </u-animate>
              <u-animate name="fadeInUp" duration="0.6s" delay="0.5s">
                <figure class="img-full">
                  <img :src="imgAPI.photo[1]" alt="img" />
                </figure>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  data() {
    return {
      imgAPI,
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
