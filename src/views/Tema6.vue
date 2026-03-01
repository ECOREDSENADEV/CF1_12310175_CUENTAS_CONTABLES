<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Cuentas reales o de balance
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        p.mb-5 Estas cuentas las conforman las del activo, pasivo y patrimonio, con las cuales, se realiza el balance general. Estas reflejan el estado real de una empresa y permiten llevar un control financiero de la empresa para la toma de decisiones.

        separador
        
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.1 Concepto
        
        .bg-color-4.p-4.mb-5
          p.mb-0 Las cuentas reales o de balance representan valores tangibles como las propiedades, las deudas y el capital, formando parte de un estado financiero llamado: balance general, el cual es requerido en cualquier empresa y sirve de base para el análisis financiero y la toma de decisiones gerenciales.  Estas cuentas pueden corresponder a: activo, pasivo y patrimonio.
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-md-8.col-lg-6
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 3.
              span Cuentas reales o de balance
            img(data-aos="fade-up", src="@/assets/curso/tema6/1.svg", alt="Diagrama conceptual que organiza las cuentas reales o de balance en tres grupos: activo, pasivo y patrimonio. El activo y el pasivo se subdividen en corrientes y no corrientes, según su exigibilidad o disponibilidad dentro del ciclo contable anual.")

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .p-3.p-md-4(titulo="Activo")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Activo
            p Son los bienes y derechos de la empresa, que pueden generar dinero o ingresos en el futuro, por lo cual, ofrecen beneficios económicos.
            p El dinero en caja o en bancos, las mercancías, los muebles y los vehículos, por ejemplo, son bienes.  Las cuentas por cobrar y los créditos son derechos que puede poseer una empresa.
            p Se clasifican en:
            ul.lista-ul--color
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-2
                p.mb-0 <b>Activo corriente</b>: son con los que cuenta una empresa en un periodo inferior a un año.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-2
                p.mb-0 <b>Activo no corriente</b>: son los que posiblemente se conviertan en efectivo, en un periodo superior a un año
             
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/2.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Pasivo")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Pasivo
            p Constituyen las obligaciones contraídas por cualquier concepto para que ser pagadas a terceros en el futuro y se clasifican en:
            ul.lista-ul--color
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-2
                p.mb-0 <b>Pasivo corriente</b>: son las obligaciones y deudas que tiene la empresa en un plazo inferior a un año.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-2
                p.mb-0 <b>Pasivo no corriente</b>: son las obligaciones y deudas que tiene la empresa, en un periodo superior a un año.
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/3.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Patrimonio")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Patrimonio
            p El valor resultante de la diferencia entre el activo y el pasivo. Dentro de este se encuentran los aportes de los propietarios para crear la empresa, tales como, el capital o bienes aportados; asimismo, incluye las utilidades y reservas.
            p Es una obligación interna de la empresa a favor de los dueños, por lo cual, su naturaleza es igual a la del pasivo.
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/4.png', alt='Imagen de acompañamiento')
    
    p.mb-5 A continuación, se conocerán las diferencias entre activo corriente y no corriente:

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Diferencias entre activo corriente y no corriente 
            .tabla-a.color-acento-contenido.mb-5.tbl
              table
                thead
                  tr
                    th.bg-color-10 Característica
                    th.bg-color-10 Activo Corriente
                    th.bg-color-10 Activo No Corriente
                tbody
                  tr.bg-color-sintesis
                    td Plazo de liquidez
                    td Un plazo de liquidez menor a un año.
                    td Un plazo de liquidez superior a un año.
                  tr.bg-color-white
                    td Uso principal
                    td Se utilizan para saldar deudas a corto plazo.
                    td Se utilizan para saldar deudas a largo plazo.
                  tr.bg-color-sintesis
                    td Intención de conservación
                    td La empresa planea conservarlos solo por un tiempo breve.
                    td La empresa planea conservarlos por un largo periodo de tiempo.
                  tr.bg-color-white
                    td Criterio de clasificación
                    td Se clasifican como no corrientes cuando se destinan a inversiones a largo plazo.
                    td Se consideran no corrientes cuando están destinadas a inversiones a largo plazo.
                  tr.bg-color-sintesis
                    td Casos especiales
                    td Se consideran no corrientes, por ejemplo, cuando los créditos a corto plazo son llevados a un proceso judicial.
                    td Se clasifican como corrientes, por ejemplo, cuando los créditos a corto plazo son sometidos a un proceso judicial.
                  tr.bg-color-white
                    td Utilidad financiera
                    td Son útiles para determinar la brecha financiera y la liquidez a corto plazo.
                    td Son útiles para determinar la solvencia de la empresa.

        p.mb-5 Luego de haber conocido las diferencias entre el activo corriente y no corriente, pasaremos a identificar las correspondientes al pasivo.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3.
              span Diferencias entre pasivo corriente y no corriente 
            .tabla-a.color-acento-contenido.mb-5.tbl
              table
                thead
                  tr
                    th.bg-color-10 Característica
                    th.bg-color-10 Pasivo Corriente
                    th.bg-color-10 Pasivo No Corriente
                tbody
                  tr.bg-color-sintesis
                    td Plazo de cancelación
                    td Inferior a un año.
                    td Superior a un año.
                  tr.bg-color-white
                    td Tipo de deuda
                    td Deudas de corto plazo.
                    td Deudas de largo plazo.
                  tr.bg-color-sintesis
                    td Obligación de la empresa
                    td Obligada a cancelar deudas en el corto plazo o refinanciarlas para dilatar el plazo.
                    td Obligada a cancelar en el largo plazo, con opción de cancelación anticipada si es conveniente.
                  tr.bg-color-white
                    td Cambio de categoría
                    td Se convierten en no corrientes cuando se refinancian los pasivos corrientes.
                    td Se convierten en corrientes al renegociar intereses y acortar plazos, o al faltar 12 meses para su vencimiento.
                  tr.bg-color-sintesis
                    td Utilidad financiera
                    td Útiles para calcular la brecha financiera, el endeudamiento general y a corto plazo.
                    td Útiles para calcular el endeudamiento general y la solvencia, especialmente en hipotecas o prendas.
    
    p.mb-5 Para cerrar esta fase del contenido conoceremos las cuentas del patrimonio.
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-md-8.col-lg-6
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 4.
              span Cuentas de patrimonio
            img(data-aos="fade-up", src="@/assets/curso/tema6/5.svg", alt="Esquema conceptual de las cuentas de patrimonio que incluye capital social, reservas legales, facultativas y estatutarias, utilidades no distribuidas, pérdidas acumuladas y utilidad del ejercicio, representando los recursos propios y resultados acumulados de la empresa.")

        separador
        
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.2 Características
        
        p.mb-5 Para comprender la estructura financiera de cualquier entidad, es fundamental distinguir las características del activo, el pasivo y el patrimonio, por lo cual, se estudirarán cada una de estas.

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-11.h-100.p-4
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema6/6.svg', alt='Texto que describa la imagen')

              h3.mb-4.text-center Características del Activo
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-0 Generan beneficios o servicios.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-0 Están bajo el control de la empresa.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-0 Suscitan derecho de reclamación.
             

          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-11.h-100.p-4
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema6/7.svg', alt='Texto que describa la imagen')

              h3.mb-4.text-center Características del pasivo
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-0 Esta tiene que haberse causado: contabilizarla para luego hacer el pago.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-0 Que el tercero quien se le debe sea real.
             
          
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-11.h-100.p-4
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema6/8.svg', alt='Texto que describa la imagen')

              h3.mb-4.text-center Características del patrimonio
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-0 Estar conformado por la inversión inicial y la adicional entregada por los propietarios de la empresa.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  p.mb-0 Incrementar con las utilidades y disminuir con las pérdidas.
    
    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Movimientos
    
    p.mb-5 El movimiento de las cuentas reales o de balance se rige por la naturaleza de sus elementos: mientras que el activo aumenta por el debe y disminuye por el haber (ya sea corriente o no corriente), el pasivo y el patrimonio aumentan por el haber y disminuyen por el debe, representando las fuentes de financiación y las deudas de corto o largo plazo. Comprender esta dinámica es importante para conocer la situación financiera real.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 7.
                span Cuentas de activo
              figure
                img(src='@/assets/curso/tema6/9.svg', alt='La ilustración diagrama las cuentas de activo con su comportamiento contable: el valor inicial y los aumentos se registran en el debe, mientras las disminuciones se contabilizan en el haber, reflejando el movimiento y saldo de los recursos.')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Movimiento de las cuentas del activo
              p.mb-0 Inician y aumentan su movimiento en el “debe”, es decir, cuando la transacción sea de naturaleza débito. Asimismo, disminuyen y se cancelan en el “haber” cuando la naturaleza del movimiento sea crédito.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 8.
                span Cuentas de pasivo
              figure
                img(src='@/assets/curso/tema6/10.svg', alt='Esquema explicativo sobre el funcionamiento de las cuentas de pasivo. Indica que el valor inicial y los incrementos se registran en el haber, mientras las disminuciones o cancelaciones se contabilizan en el debe, representando las obligaciones financieras de la entidad.')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Movimiento de las cuentas del pasivo
              p.mb-0 Inician y aumentan su movimiento en el haber, es decir, cuando la transacción o movimiento es de naturaleza crédito. Asimismo, disminuyen y se cancelan en el debe cuando la naturaleza del movimiento sea débito.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 9.
                span Cuentas de patrimonio
              figure
                img(src='@/assets/curso/tema6/11.svg', alt='Representación del funcionamiento de la cuenta de patrimonio. En el debe se registran disminuciones, pérdidas y retiros de capital; en el haber, aumentos, aportes de socios y utilidades. Su saldo normal es crédito, reflejando los recursos propios.')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Movimiento de las cuentas del patrimonio 
              p.mb-0 Igual que en el pasivo, estas cuentas inician y aumentan su movimiento en el haber, es decir, cuando la transacción o movimiento es de naturaleza crédito. Asimismo, disminuyen y se cancelan en el debe cuando la naturaleza del movimiento sea débito.
             
</template>

<script>
export default {
  name: 'Tema6',
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
