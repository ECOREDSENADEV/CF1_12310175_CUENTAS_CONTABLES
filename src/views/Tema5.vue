<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Clasificación de las cuentas
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p Representan los derechos, bienes y obligaciones que la empresa tiene en una fecha determinada.
            .bg-color-1.px-5.py-4.mb-3
              p.mb-0 Las cuentas se clasifican de acuerdo con la naturaleza en: reales o de balance, nominales o de ganancias; y de pérdidas o de orden. 
            .row.justify-content-center.align-items-center.z-2.mb-5
              .col-lg-11
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 2.
                  span Clasificación de las cuentas
                img(data-aos="fade-up", src="@/assets/curso/tema5/2.svg", alt="La imagen representa el esquema conceptual que clasifica las cuentas contables en reales, nominales y de orden. Las reales incluyen activo, pasivo y patrimonio; las nominales abarcan ingresos, gastos y costos; y las de orden se dividen en deudoras y acreedoras para control contable.")
               

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
