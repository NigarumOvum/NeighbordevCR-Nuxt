<template>
  <div>
    <div
      v-for="(index) in 1"
      :key="index"
      :id="'topic'+index"
      class="accordion"
    >
      <h4 class="use-text-subtitle mb-3">
     Preguntas Frecuentes
      </h4>
      <v-expansion-panels
        v-model="panel"
        active-class="expanded"
      >
        <v-expansion-panel
          v-for="(item, index) in faqData"
          :key="index"
          class="paper"
        >
           <v-expansion-panel-header class="content">
            <span class="heading">
              {{ item.q }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="detail">
            <span>
              {{ item.a }}
            </span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script>
import Hidden from '../Hidden'

const faqData = [
  {
    q: '¿NeighborDev CR ofrece garantía?',
    a:
      'Sí, NeighborDev CR le ofrece a todos sus clientes una garantía de 30 días para la devolución de su dinero.'
  },
  {
    q: '¿Cuáles métodos de pago acepta actualmente?',
    a:
      'Actualmente acpetamos Tarjetas de Crédito y Débito (Visa y/o MasterCard) a través de nuestra plataforma en línea del Banco Nacional de Costa Rica, también puede realizar sus pagos utilizando PayPal, Tranferencias Bancarias a Bancos de Costa Rica, Dinero en Efectivo y Tarjetas de Crédito o Débito en nuestras sucursales y oficinas.'
  },
  {
    q: 'Si necesido ayuda, ¿Cómo puedo comunicarme?',
    a:
      'Puede comunicarse con nosotros a través de nuestras redes sociales, por el chat de esta web o enviarnos un correo electrónico a neighbordevcr@gmail.com'
  }
  // {
  //   q: 'Quisque ut metus sit amet augue?',
  //   a:
  //     'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  // },
  // {
  //   q: 'Pellentesque ac bibendum tortor?',
  //   a:
  //     'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  // }
]

export default {
  components: {
    Hidden
  },
  data() {
    return {
      panel: 0,
      faqData: faqData
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
