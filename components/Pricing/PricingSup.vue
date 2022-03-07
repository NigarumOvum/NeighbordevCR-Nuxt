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
          title: 'Mantenimiento',
          price: '55',
          description: [
            'Mantenimiento',
            'Preventivo & Correctivo',
            'Formateo OS',
            'Limpieza',
            'Hardware & Software'
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
        {
          title: 'Sitio Web Básico',
          price: '250',
          description: [
            '15 users included',
            '10 GB of storage',
            'Help center access'
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
        {
          title: 'Sitio Web Pro',
          subheader: 'Most popular',
          price: '450',
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
          title: 'Consultoria Marketing',
          price: '150',
          description: [
            'Estrategias SEO/SEM',
            'Estrategias Campañas Email',
            'Estrategias Redes Sociales',
            'Estrategias Branding',
            'Estrategias Control Pauta'
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        }
      ]
    }
  }
}
</script>
