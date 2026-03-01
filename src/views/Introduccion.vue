<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        p.mb-5 Las actividades empresariales requieren profesionales con bases muy sólidas en la gestión de la información financiera para garantizar la transparencia y la legalidad en sus operaciones. Por lo anterior, es importante dominar la normativa vigente en Colombia, fundamentada en pilares como el Decreto 2649 de 1993 y la Ley 43 de 1990. El conocimiento riguroso de estos marcos legales es lo que permite a las organizaciones estandarizar sus procesos bajo los principios contables organizacionales, garantizando que la información reportada sea íntegra, veraz y confiable para la toma de decisiones estratégicas. 

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La contabilidad es el sistema integral que permite recolectar, clasificar y registrar la realidad económica de una organización para generar informes financieros precisos. Estos reportes son fundamentales para analizar la situación patrimonial y garantizar que la información sea útil y confiable en la toma de decisiones estratégicas. Bajo este marco, el sistema contable se rige por una regulación técnica y legal que aporta orden lógico a los registros; de esta manera, el Estado asegura la vigilancia y el control de las operaciones mercantiles, garantizando que tanto personas naturales como jurídicas den estricto cumplimiento a la normativa vigente.
        
        .bg-color-1.mb-5.p-4.p-xl-0
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg.order-lg-1.px-4
              p.mb-0 La apropiación de conocimientos contables fomenta una cultura de organización y control en el manejo de los recursos, permitiendo proyectar bases financieras sólidas a mediano y largo plazo. Más allá del cumplimiento técnico, esta formación faculta al individuo para estructurar sus cuentas personales y, fundamentalmente, para liderar iniciativas de emprendimiento con una visión empresarial estratégica y sostenible. 
        

      
      
        

</template>

<script>
export default {
  name: 'Introduccion',
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
