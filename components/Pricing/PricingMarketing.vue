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
          title: 'Analisis & Optimización de motores de búsqueda (SEO)',
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
          title: 'Optimización de motores de Marketing(SEM)',
          price: '100',
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
          title: 'Manejo Redes Sociales',
          price: '220',
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
          title: 'Manejo Redes Sociales II',
          price: '320',
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
        {
          title: 'Campañas E-mail I',
          price: '200',
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
        {
          title: 'Campañas E-mail II',
          price: '300',
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
                {
          title: 'Publicidad I',
          price: '350',
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
        {
          title: 'Publicidad II',
          price: '700',
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
                {
          title: 'Publicidad II',
          price: '1100',
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
