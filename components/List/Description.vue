<template>
  <v-row justify="center">
    <v-col lg="10" md="12" class="pa-6">
      <v-row>
        <v-col class="px-4" sm="8" cols="12">
          <h4 class="use-text-subtitle mb-3">
            {{ $t('common.list_desc') }}
          </h4>
          <p>En NeighborDev CR somos expertos en Soporte Tecnico, Diseño | Desarrollo de páginas & aplicaciones web, utilizamos las mejores y actualizadas técnicas y practicas. </p>
          <p>Velamos por la seguridad de su información y es por esto que cumplimos a cabalidad el Reglamento de la Ley de Promoción de la Competencia y Defensa Efectiva del Consumidor, mas aun para su capítulo “Protección del consumidor en el Contexto del Comercio Electrónico”, de esta forma le aseguramos que su información personal o sobre su empresa no será enviada, vendida a ninguna empresa externa con fines comerciales o publicitarios, todo esto en norma con la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales y la Ley General de Telecomunicaciones.</p>
          <div class="btn-area">
            <v-btn href="#" class="text-btn" text>
              <i class="ion-md-share" />
              Share
            </v-btn>
            <v-btn href="#" class="text-btn" text>
              <i class="ion-ios-film" />
              Trivia
            </v-btn>
            <v-btn href="#" class="text-btn" text>
              <i class="ion-ios-star" />
              Rate this
            </v-btn>
          </div>
        </v-col>
        <v-col class="px-4" sm="4" cols="12">
          <div class="person">
            <h6 class="title-person">
              Property 1
            </h6>
            <p>Item 1, Item 2, Item 3, Item 4, Item 5</p>
            <h6 class="title-person">
              Property 2
            </h6>
            <p>Item 1, Item 2, Item 3, Item 4, Item 5</p>
            <h6 class="title-person">
              Property 3
            </h6>
            <p>Item 1, Item 2, Item 3, Item 4, Item 5</p>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import './list.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  data: () => ({
    imgAPI: imgAPI
  }),
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
