<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual detalla la normatividad y estructura contable en Colombia, fundamentada en los Decretos 2649 y 2650 de 1993 y la Ley 43 de 1990. Organiza el Plan Único de Cuentas (PUC) mediante un catálogo jerárquico por dígitos y explica el funcionamiento de la cuenta T con sus respectivos registros de débitos, créditos y saldos. Finalmente, clasifica las cuentas en reales o de balance (activo, pasivo y patrimonio), nominales y de orden, resaltando que los activos y pasivos se dividen según su liquidez en corrientes y no corrientes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
