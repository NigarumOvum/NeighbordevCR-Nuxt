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
          title: 'Básico (Landing Page/Start Up)',
          price: '100',
          description: [
                'Certificado SSL',
                '5GB almacenamiento', 
                'Respaldo mensual',
                'Mantenimiento mensual',
                'Renovación anual +$50'
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
        {
          title: 'Basico Ecommerce',
          price: '240',
          description: [
                'Certificado SSL',
                '10GB almacenamiento', 
                '1 Base de datos',
                'SEO Básico', 
                'Respaldo mensual',
                'CMS',
                'Renovación anual +$100'
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
               {
          title: 'Platino Ecommerce',
          price: '400',
          description: [
                'Certificado SSL',
                '50GB almacenamiento', 
                '2 Base de datos',
                'SEO Medio', 
                'Respaldo quincenal',
                'CMS &/O Django',
                'Renovación anual +$130'
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
                {
          title: 'Oro Ecommerce',
          price: '620',
          description: [
                'Certificado SSL',
                '10GB almacenamiento', 
                '1 Base de datos',
                'Branding', 
                'UI/UX', 
                'SEO Avanzado',
                'Marketing Digital Básico',
                'Respaldo semanal',
                'CMS &/O React, Vue',
                'Renovación anual +$180'
          ],
          buttonText: 'Comprar',
          buttonVariant: 'outlined'
        },
      ]
    }
  }
}
</script>
