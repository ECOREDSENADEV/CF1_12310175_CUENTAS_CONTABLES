export default {
  global: {
    Name: 'Cuentas contables: normatividad y conceptos generales.',
    Description:
      'Este componente formativo ha sido diseñado para el dominio de la estructura contable en el contexto colombiano. Por medio de su contenido, usted podrá profundizar en el marco normativo vigente, la aplicación ética de los principios contables y el manejo del Plan Único de Cuentas (PUC). También, aborda de manera práctica el esquema de la cuenta T y los criterios fundamentales para la clasificación de las cuentas, elementos esenciales para garantizar procesos de registro precisos y transparentes en cualquier organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normativa en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Decreto 2649 de 1993',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Decreto 2650 de 1993',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ley 43 de 1990',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Principios contables',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan único de cuentas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura del <em>PUC</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Catálogo de cuentas',
            hash: 't_3_2',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Esquema de la Cuenta T',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Registro en la Cuenta T',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Saldos en la Cuenta T (débito y crédito)',
            hash: 't_4_2',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Clasificación de las cuentas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Cuentas reales o de balance',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Conceptos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Características',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Movimientos',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'conjunto de bienes que constituyen una empresa, con el que se consiguen beneficios a presente o futuro, de acuerdo con su utilización.',
    },
    {
      termino: 'Costos de operación',
      significado:
        'valor generado por el total de recursos destinados a la administración, operación y funcionamiento de una organización, empresa o entidad pública.',
    },
    {
      termino: 'Costos de producción',
      significado: 'valor generado por la obtención de un bien.',
    },
    {
      termino: 'Costos de ventas',
      significado:
        'es el valor generado por la venta y distribución de un producto o servicio.',
    },
    {
      termino: 'Decreto 2649 de 1993',
      significado:
        'surge con el objetivo de reglamentar las normas del Código de Comercio en lo relacionado con la contabilidad y para definir los principios y normas contables aceptadas en Colombia.',
    },
    {
      termino: 'Decreto 2650 de 1993',
      significado:
        'hace referencia al Plan Único de Cuentas (PUC), el cual fue creado para armonizar y unificar el sistema contable de los principales sectores económicos del país.',
    },
    {
      termino: 'Gastos',
      significado:
        'se refiere al egreso o salida de dinero para el pago de un bien adquirido o un servicio prestado.',
    },
    {
      termino: 'Ingresos',
      significado:
        'hace referencia a las entradas económicas que percibe una persona natural, jurídica, una empresa, organización, gobierno, entre otros.',
    },
    {
      termino: 'Ley 43 de 1990',
      significado:
        'conceptúa de manera clara la profesión contable y la labor del contador público.',
    },
    {
      termino: 'Pasivo',
      significado:
        'recursos que representan los convenios de la entidad económica en desarrollo de los compromisos monetarios para aportar dinero, bienes o servicios.',
    },
    {
      termino: 'Patrimonio neto',
      significado:
        'valor total de una empresa luego que se descuentan las deudas.',
    },
    {
      termino: 'Principio de la consistencia',
      significado:
        'exige uniformidad en la aplicación de los métodos de valuación y en la clasificación de las partidas dentro de los estados financieros a lo largo del tiempo.',
    },
    {
      termino: 'Principio de la entidad',
      significado:
        'establece que la empresa posee una personalidad jurídica independiente de la de sus socios o propietarios.',
    },
    {
      termino: 'Principio de la unidad monetaria',
      significado:
        'asume de forma estática que el poder adquisitivo de la moneda permanece invariable a través del tiempo.',
    },
    {
      termino: 'Principio de enfrentamiento',
      significado:
        'busca asociar de manera directa los ingresos generados en un ejercicio con los gastos necesarios para su obtención.',
    },
    {
      termino: 'Principio de negocio en marcha',
      significado:
        'asume que la empresa operará de manera ininterrumpida por un periodo indeterminado.',
    },
    {
      termino: 'Principio del período contable',
      significado:
        'divide el ciclo de vida de la empresa en periodos contables definidos de manera convencional.',
    },
    {
      termino: 'Principio de costo',
      significado:
        'exige objetividad en el registro de las transacciones, fundamentando cada operación en comprobantes o documentos de soporte válidos.',
    },
    {
      termino: 'Principio de conservatismo o criterio prudencial',
      significado:
        'orienta al contador a seleccionar la opción más prudente ante diversas alternativas.',
    },
    {
      termino: 'Principio de revelación suficiente',
      significado:
        'habla de ajustar los estados financieros a razón de los cambios en el poder adquisitivo de la moneda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castro, O. (13 de septiembre de 2011). Método de la partida doble. Contabilidad-Conta.',
      link:
        'http://contabilidad-conta.blogspot.com/2011/09/metodo-de-la-partida-doble.html',
    },
    {
      referencia:
        'Congreso de Colombia. (13 de diciembre de 1990). Ley 43 de 1990. Por la cual se adiciona la Ley 145 de 1960, reglamentaria de la profesión de Contador Público y se dictan otras disposiciones. Ministerio de Educación Nacional.',
      link:
        'http://www.mineducacion.gov.co/1621/articles-104548_archivo_pdf.pdf',
    },
    {
      referencia:
        'Coral, L., y Gudiño, E. (2008). Contabilidad universitaria (6.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (29 de diciembre de 1993). Decreto 2650 de 1993. Por el cual se modifica el Plan Único de Cuentas para los Comerciantes. Sistema Único de Información Normativa (SUIN-Juriscol).',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1772403',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (29 de diciembre de 1993). Decreto 2649 de 1993. Por el cual se reglamenta la Contabilidad en General y se expiden los principios o normas de contabilidad generalmente aceptados en Colombia. Sistema Jurídico de Bogotá.',
      link: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=9863',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (15 de julio de 2010b). Decreto 2555 de 2010. Por el cual se recogen y reexpiden las normas en materia del sector financiero, asegurador y del mercado de valores y se dictan otras disposiciones. Sistema Jurídico de Bogotá.',
      link: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=40032',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
