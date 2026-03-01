<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Plan único de cuentas 
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-4.px-5.py-4
              p.mb-0 Está consagrado en el Decreto 2649 de 1993 y permite dar un conocimiento en la realización de la actividad contable, es decir que en todas sus transacciones y operaciones hay claridad en la información correspondiente. En el plan de cuentas deberá identificar cuál es el tipo de cuenta para la confección de los balances, mensuales o anuales.
        
        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Estructura del <b>PUC</b> 
        
        p.mb-5 Actualmente existen catorce planes únicos de cuentas los cuales son:

        .row.justify-content-center
          .col-xl-10
            .bg-color-5.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema3/2.png', alt='alt')
                .col-lg
                  .p-4
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para comerciantes.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para el sector financiero.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para el sector asegurador. 
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para fondo de cesantías.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para fondo de pensiones.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> de fondos de reservas para pensiones de régimen solidario de prima media con prestación definida.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para entes vigilados por la Superintendencia de Valores.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para entes vigilados por Dancoop.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para los hospitales. 
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para cajas de compensación familiar.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para fondos de pensiones administrados por la Caja de Auxilios y Prestaciones de la Asociación Colombiana de Aviadores Civiles – CAXDAC.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para entidades públicas. 
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para el Banco de la República.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-2
                        p.mb-1 <b>PUC</b> para entes prestadores de servicios públicos domiciliarios.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-xl-5.mb-3.mb-lg-0
        .bg-color-1.p-3.px-lg-5.tarjeta 
          p.mb-0 Bajo las facultades del Decreto 2555 de 2010, la Superintendencia Financiera ajustó su PUC mediante la creación de subcuentas específicas para segmentar la cartera de consumo, tales como tarjetas de crédito, sobregiros y operaciones de redescuento. Paralelamente, la Superintendencia Nacional de Salud desarrolló un Plan Único de Cuentas propio para entidades como EPS e IPS, el cual integra disposiciones generales, catálogo de cuentas, descripciones y dinámicas contables para asegurar la estandarización del sector.
      .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-xl-4
        img.d-xl-flex.d-none(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mb-3
        .bg-color-6.p-3.px-lg-5
          p.mb-0 Está conformado por un catálogo de cuentas, con su respectiva descripción y dinámica para aplicarlas en el ejercicio contables de todas las operaciones y transacciones de las organizaciones. Se clasifican de la siguiente manera:
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/5.svg' alt='AvatarTop')
            h2.text-center Activo
            p.text-center Conjunto de bienes que constituyen una empresa, con el que se consiguen beneficios a presente o futuro, de acuerdo con su utilización.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop')
            h2.text-center Pasivo
            p.text-center recursos que representan los convenios de la entidad económica en desarrollo de los compromisos monetarios para aportar dinero, bienes o servicios.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/7.svg' alt='AvatarTop')
            h2.text-center Patrimonio neto 
            p.text-center Valor total de una empresa luego que se descuentan las deudas.
          
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop')
            h2.text-center Ingresos 
            p.text-center Hace referencia a las entradas económicas que percibe una persona natural, jurídica, una empresa, organización, gobierno, entre otros.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop')
            h2.text-center Gastos 
            p.text-center Se refiere al egreso o salida de dinero para el pago de un bien adquirido o un servicio prestado.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop')
            h2.text-center Costos de ventas
            p.text-center Es el valor generado por la venta y distribución de un producto o servicio.
          
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop')
            h2.text-center Costos de producción
            p.text-center Valor generado por la obtención de un bien.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop')
            h2.text-center Costos de operación
            p.text-center Valor generado por el total de recursos destinados a la administración, operación y funcionamiento de una organización, empresa o entidad pública.

        separador
        
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Catálogo de cuentas
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        p.mb-5 Con base en el artículo 14 del Decreto 2650 la codificación del catálogo de cuentas se estructura sobre los siguientes niveles:

        .row.justify-content-center.mb-5
          .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
            .bg-color-7.text-center.p-4.h-100
              h5 Clase
              p.mb-0 El primer dígito.
          .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
            .bg-color-7.text-center.p-4.h-100
              h5 Representación
              p.mb-0 Los dos primeros dígitos.
          .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
            .bg-color-7.text-center.p-4.h-100
              h5 Cuenta
              p.mb-0 Los cuatro primeros dígitos.
          .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
            .bg-color-7.text-center.p-4.h-100
              h5 Subcuenta
              p.mb-0 Los seis primeros dígitos.

        p.mb-5 A continuación, se clasifica cada clase:

        .row.justify-content-center.mb-3
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/13.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 1
                  p.mb-0 Activo
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/14.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 2
                  p.mb-0 Pasivo
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/15.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 3
                  p.mb-0 Patrimonio
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/16.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 4
                  p.mb-0 Ingresos
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/16.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 5
                  p.mb-0 Gastos
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/16.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 6  
                  p.mb-0 Costos de ventas
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/16.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 7
                  p.mb-0 Costos de producción o de operación
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/16.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 8
                  p.mb-0 Cuentas de orden deudoras
          .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/16.svg', style="max-width: 76px" alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-8
                .p-4.text-center
                  h5 Clase 9 
                  p.mb-0 Cuentas de orden acreedoras

    

</template>

<script>
export default {
  name: 'Tema3',
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
