<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Normativa en Colombia 
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.order-lg-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.px-5.py-4
          p.mb-0 La base de la contabilidad en Colombia se ha cimentado históricamente sobre un marco normativo diseñado para garantizar la transparencia y la uniformidad en la información financiera. Juntos, estos pilares normativos estructuraron el lenguaje contable del país durante décadas, permitiendo que la información fuera comprensible, útil y comparable para el desarrollo empresarial. Estas las conoceremos a continuación:
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4

        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Decreto 2649 de 1993
        
        p.mb-5 Surge con el objetivo de reglamentar las normas del Código de Comercio en lo relacionado con la contabilidad y para definir los principios y normas contables aceptadas en Colombia. En este decreto, que rigió a partir del 1 de enero de 2016, se reúne en un solo documento la normativa para la contabilidad mercantil de orígenes diversos que regían en el país con mucha anterioridad y deroga algunos decretos reglamentarios.

        .row.justify-content-center
          .col-lg-10
            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/2.png', alt='alt')
                .col-lg
                  .p-4
                    p(data-aos="fade-up") Los decretos derogados son:
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-2 <b>El 2160 de 1986</b>, relacionado con los principios de contabilidad.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-2 <b>El 1798 de 1990</b> que habla del registro y libros contables. 
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-2 <b>El 2912 de 1991</b>, cuyo tema es el ajuste integral por inflación para efectos contables.  

        separador
        
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Decreto 2650 de 1993 
        
    p.mb-5 Hace referencia al Plan Único de Cuentas (PUC), el cual, es creado para armonizar y unificar el sistema contable de los principales sectores económicos del país.

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center
          .col-lg-10
            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/3.png', alt='alt')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Este decreto tiene un fundamento legal en la norma técnica de clasificación de los hechos económicos, el cual se establece en el artículo 53 de Decreto Reglamentario 2649 de 1993.
        
        separador
        
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.3 Ley 43 de 1990

        p.mb-5 Coneptua de manera clara la profesión contable y la labor del contador público.

        
        .row.justify-content-center.align-items-center.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            .bg-color-4.px-5.py-4
              p(data-aos="fade-up") El contador debe:
              ul.lista-ul--color.ms-3.mb-0
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-2 Dar fe pública de hechos propios del ámbito de su profesión.
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-2 Dictaminar acerca de  los  estados  financieros. 
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-2 Realizar  otras  actividades  afines  a  la  ciencia contable en general.
                    

 
        .row.justify-content-center
          .col-lg-10
            .bg-color-1.mb-5(data-aos="fade-down")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/5.png', alt='alt')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Bajo el marco de la Ley 43 de 1990, el contador público tiene la prohibición de dar fe pública sobre actos que interesen a su empleador debido a la dependencia laboral, exceptuando a los revisores fiscales o contadores en sociedades no obligadas legalmente a esta figura. Al ejercer su facultad de otorgar fe pública, el profesional se asimila a un funcionario público, lo que conlleva responsabilidades penales y civiles en caso de irregularidades en el ejercicio de sus funciones.
        


 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
