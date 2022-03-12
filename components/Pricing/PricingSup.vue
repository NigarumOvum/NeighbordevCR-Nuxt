<template>
  <v-container>
    <h3 class="display-2 text-center mb-4">
      Planes & Precios
    </h3>
    <p class="body-1 text-center mb-4">
      Se mostraran precios de cada servicio
    </p>
    <div class="pricing-wrap">
      <v-row align="center">
        <v-col
          v-for="(tier, index) in tiers"
          :key="index"
          md="3"
          sm="6"
          cols="12"
          class="px-5"
        >
          <pricing-card
            :title="tier.title"
            :subheader="tier.subheader"
            :price="tier.price"
            :description="tier.description"
            :button-text="tier.buttonText"
            :button-variant="tier.buttonVariant"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './pricing-style';
</style>

<script>
import PricingCard from '../Cards/PricingCard'

export default {
  components: {
    PricingCard
  },
  data() {
    return {
      tiers: [
        {
          title: 'Revisión/Diagnóstico',
          price: '45',
          description: [
            ''
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
        {
          title: 'Respaldo Información',
          price: '50',
          description: [
            ''
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
        {
          title: 'Instalación Sistema Operativo',
          subheader: 'Most popular',
          price: '40',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support'
          ],
          buttonText: 'Comprar',
          buttonVariant: 'contained'
        },
        {
          title: 'Mantenimiento Hardware',
          price: '50',
          description: [
            ''
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
        {
          title: 'Mantenimiento Software',
          price: '30',
          description: [
            ''
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        }
      ]
    }
  }
}
</script>
