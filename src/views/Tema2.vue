<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Principios contables
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        .bg-color-4.px-5.py-4
          p.mb-0 Se rigen por el Decreto 2649 de 1993 y corresponde al resultado de experiencias que han llevado a la creación de un conjunto de normas generales elaboradas con el objetivo de regular la contabilidad pública.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/2.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El  principio de la entidad.
              p.mb-0 El principio de entidad establece que la empresa posee una personalidad jurídica independiente de la de sus socios o propietarios. En consecuencia, el sistema contable debe enfocarse exclusivamente en el registro y control de los bienes, derechos y obligaciones que pertenecen a la organización como ente jurídico, manteniendo una separación estricta de las finanzas personales de sus miembros.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/3.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El principio del negocio en marcha. 
              p.mb-0 Bajo la presunción de continuidad o negocio en marcha, se asume que la empresa operará de manera ininterrumpida por un periodo indeterminado. Esta visión trasciende los plazos formales de los estatutos y fundamenta la valoración de los activos no corrientes; al no prever una liquidación inmediata, el costo de dichos activos se reconoce de forma gradual, respaldando la estabilidad financiera de la organización a largo plazo.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/4.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El principio del período contable. 
              p.mb-0 Dado que la existencia de la empresa se proyecta de forma ilimitada bajo el principio de negocio en marcha, es imperativo dividir su ciclo de vida en periodos contables definidos de manera convencional. Esta segmentación temporal tiene como objetivo principal informar periódicamente sobre el desempeño operativo y la situación financiera de la organización, permitiendo evaluar los resultados obtenidos en lapsos de tiempo específicos para una gestión transparente.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/5.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El principio de enfrentamiento. 
              p.mb-0 Este principio es considerado fundamental en la práctica contable profesional, ya que busca asociar de manera directa los ingresos generados en un ejercicio con los gastos necesarios para su obtención. Es precisamente en esta asociación donde radica la principal diferencia entre la contabilidad financiera, que busca determinar la utilidad real del negocio, y la contabilidad fiscal, enfocada primordialmente en el recaudo de tributos. Por lo tanto, el contador tiene la responsabilidad ética y técnica de aplicar este criterio con rigor para reportar beneficios económicos precisos, más allá de los requerimientos puramente impositivos del fisco.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/6.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El principio de conservatismo o criterio prudencial. 
              p.mb-0 Orienta al contador a seleccionar la opción más prudente ante diversas alternativas, estableciendo que las pérdidas deben reconocerse tan pronto se conocen, mientras que los ingresos solo se contabilizan cuando efectivamente se realizan. Este criterio busca un equilibrio técnico, impidiendo tanto el manejo ultraconservador como el excesivamente liberal de las cifras. El objetivo final es garantizar que los estados financieros reflejen los resultados de operación y la situación patrimonial de la manera más veraz y objetiva posible
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/7.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El principio de costo. 
              p.mb-0 Este principio exige objetividad en el registro de las transacciones, fundamentando cada operación en comprobantes o documentos de soporte válidos. Dicha evidencia documental no solo respalda la veracidad de las deducciones, sino que constituye la base técnica indispensable para facilitar los procesos de auditoría y control contable
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/8.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El principio de revelación suficiente. 
              p.mb-0 Habla de ajustar los estados financieros a razón de los cambios en el poder adquisitivo de la moneda. De allí que el contador público esté obligado a proporcionar información fidedigna que le facilite al usuario la toma de decisiones acertadas. Es usual que el contador incluya notas aclaratorias que posibiliten una lectura más clara de los estados financieros.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/9.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El  principio  de  la  unidad  monetaria. 
              p.mb-0 Este principio es objeto de debate, pues asume de forma estática que el poder adquisitivo de la moneda permanece invariable a través del tiempo. Bajo esta lógica, el contador que rechaza la revaluación de activos fijos basándose en este criterio, caería en una contradicción al pretender ajustar sus honorarios profesionales frente a la realidad económica inflacionaria
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/10.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 El  principio  de  la  consistencia.
              p.mb-0 Este principio exige uniformidad en la aplicación de los métodos de valuación y en la clasificación de las partidas dentro de los estados financieros a lo largo del tiempo. La falta de consistencia, como clasificar una partida como pasivo diferido en un periodo y como cuenta complementaria de activo en otro, genera indicadores financieros erróneos que invalidan la comparabilidad de la información. En consecuencia, el criterio profesional del contador tiene la capacidad de influir en la determinación de las utilidades sin transgredir los principios, siempre que las decisiones técnicas se mantengan coherentes entre ejercicios.


</template>

<script>
export default {
  name: 'Tema2',
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
