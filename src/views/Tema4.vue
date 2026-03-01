<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Esquema de la cuenta T
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4

        p.mb-5 Es una representación gráfica de una cuenta contable con sus elementos: 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.mb-3
            .titulo-sexto.color-acento-contenido
              h5 Figura 1
              span Cuenta T
            figure
              img(src="@/assets/curso/tema4/1.svg", alt="Esquema contable que representa la estructura básica de una cuenta, dividida en lado débito y lado crédito, donde se registran movimientos y saldos según aumentos o disminuciones, diferenciando débitos y créditos para organizar la información financiera de la empresa correctamente.", data-aos="zoom-in")
          .col-lg-7
            p La cuenta T es una herramienta práctica para registrar los hechos económicos, mediante lo cual, se visualiza el “debe” y el “haber” de cada cuenta contable.
            .bg-color-5.px-5.py-4
              p Aspectos:
              ul.lista-ul--color.mb-0
                li.mb-4.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  | Determinación del saldo: se obtiene calculando la diferencia entre el debe y el haber.
                li.mb-4.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  | Principio de partida doble: todo registro debe involucrar dos cuentas, una que entrega y otra que recibe.
                li.mb-4.d-flex
                  i.fas.fa-circle-check.bg-color-2
                  | Independencia: la contabilidad registra los bienes, derechos y obligaciones de la empresa, manteniéndolos separados del patrimonio personal de los propietarios.

        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Registro en la Cuenta T  
        
        p.mb-5 Luego de conocer cada uno de los componentes que conforman la cuenta T, se puede continuar con la realización de registros en esta, según corresponda su naturaleza. Los registros tienen nombres específicos que se describen a continuación:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.mb-3.order-lg-2
            figure
              img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .row.bg-color-9.tarjeta.px-5.py-4.align-items-center.justify-content-center
              .col-md-6.col-lg-6.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/3.svg", data-aos="zoom-in")
              .col-lg-6
                h2.text-white(data-aos="fade-left").mb-4 Pódcast
        
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="El ritmo de la cuenta T: Débitos, créditos y saldos"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    p.mb-5 A continuación, estudiaremos el registro en la cuenta T. 

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Programas de edición de video
            .tabla-a.color-acento-contenido.mb-5.tbl
              table
                thead
                  tr
                    th.bg-color-10 Concepto
                    th.bg-color-10 Descripción
                tbody
                  tr.bg-color-sintesis
                    td.text-bold Debitar
                    td Es el registro de un valor en el lado izquierdo, es decir, en la columna del debe, de una cuenta.
                  tr.bg-color-white
                    td.text-bold Acreditar
                    td Es el registro de un valor en el lado derecho, es decir, en la columna del haber, de una cuenta.
                  tr.bg-color-sintesis
                    td.text-bold Movimiento débito
                    td Este es la suma de valores registrados en la columna del debe de una cuenta.
                  tr.bg-color-white
                    td.text-bold Movimiento crédito
                    td Es la suma de valores registrados en la columna del haber de una cuenta.

        separador
        
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2 Saldos en la cuenta T (débito y crédito)
        
        p.mb-5 Resulta de generar la diferencia entre los valores registrados en la columna del debe y el haber.

        .tarjeta--container.row.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .col-md.tarjeta.color-primario.bg-color-9.p-5.text-white(data-aos="flip-up")
            .row.mb-5
              .col-6.col-lg-3
                figure
                  img(src='@/assets/curso/tema4/4.svg', alt='Texto que describa la imagen')
              
            h2.mb-5 Saldo débito
            p Es el que resulta cuando el movimiento débito de una cuenta es superior al de crédito.

          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .col-md.tarjeta.color-acento-contenido.p-5(data-aos="flip-down")
            .row.mb-5
              .col-6.col-lg-3
                figure
                  img(src='@/assets/curso/tema4/5.svg', alt='Texto que describa la imagen')
              
            h2.mb-5 Saldo crédito
            p Se habla de este tipo de saldo cuando el movimiento crédito supera al de débito.

</template>

<script>
export default {
  name: 'Tema4',
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
