const rel = 'noopener noreferrer';
const occDomain = 'https://www.occ.com.mx/';
const sightHelp = 'https://occmundialcommunity.force.com/ayudareclutadores/s/';
const loginText = 'Inicia sesión';

export const columns = () => [
  [
    {
      key: 0,
      title: 'Candidatos',
      items: [
        {
          type: 'link',
          key: '1',
          text: 'Crea un CV',
          href: 'https://www.occ.com.mx',
          title: 'Crea un CV'
        },
        {
          type: 'link',
          key: '2',
          text: loginText,
          href: 'https://www.occ.com.mx',
          title: loginText
        },
        {
          type: 'link',
          key: '3',
          text: 'Preguntas frecuentes candidatos ',
          href: 'https://occmundialcommunity.force.com/candidatos/s/article/Preguntasfrecuentes',
          title: 'Preguntas frecuentes candidatos ',
          target: '_self',
          rel
        }
      ]
    }
  ],
  [
    {
      key: 1,
      title: 'Empleos por clasificación',
      items: [
        {
          type: 'link',
          key: '1',
          text: 'Vacantes por Estado',
          href: `${occDomain}empleos-por-estado`,
          title: 'Vacantes por Estado'
        },
        {
          type: 'link',
          key: '2',
          text: 'Vacantes por Ciudad',
          href: `${occDomain}empleos-por-ciudad`,
          title: 'Vacantes por Ciudad'
        },
        {
          type: 'link',
          key: '3',
          text: 'Vacantes por Categoría',
          href: `${occDomain}empleos-por-categoria`,
          title: 'Vacantes por Categoría'
        },
        {
          type: 'link',
          key: '4',
          text: 'Vacantes más buscadas',
          href: `${occDomain}empleos-mas-buscados`,
          title: 'Vacantes más buscadas'
        },
        {
          type: 'link',
          key: '5',
          text: 'Vacantes por Contrato',
          href: `${occDomain}empleos-por-contratacion`,
          title: 'Vacantes por Contrato'
        },
        {
          type: 'link',
          key: '6',
          text: 'Vacantes por Empresa',
          href: `${occDomain}empleos-por-empresa`,
          title: 'Vacantes por Empresa'
        },
        {
          type: 'link',
          key: '7',
          text: 'Buscar empleo en México y el mundo',
          href: `${occDomain}empleos/`,
          title: 'Buscar empleo en México y el mundo'
        }
      ]
    }
  ],
  [
    {
      key: 2,
      title: 'Empresas',
      items: [
        {
          type: 'link',
          key: '1',
          text: 'Busco talento / Publicar Anuncio',
          href: `${occDomain}empresas/?utm_source=occmundial&utm_medium=referral&utm_campaign=footer`,
          title: 'Busco talento / Publicar Anuncio',
          target: '_self',
          rel
        },
        {
          type: 'link',
          key: '2',
          text: 'Ayuda para reclutadores',
          href: sightHelp,
          title: 'Ayuda para reclutadores',
          target: '_self',
          rel
        },
        {
          type: 'link',
          key: '3',
          text: 'Preguntas frecuentes de reclutadores',
          href: `${sightHelp}article/Preguntas-frecuentes-para-reclutadores`,
          title: 'Preguntas frecuentes de reclutadores',
          target: '_self',
          rel
        }
      ]
    }
  ],
  [
    {
      key: 3,
      title: 'OCC',
      items: [
        {
          type: 'link',
          key: '4',
          text: 'Acerca de OCC',
          href: `${occDomain}nosotros`,
          title: 'Acerca de OCC',
          rel: 'nofollow'
        },
        {
          type: 'link',
          key: '5',
          text: 'Blog',
          href: `${occDomain}blog/`,
          title: 'Blog',
          rel: 'nofollow'
        },
        {
          type: 'link',
          key: '6',
          text: 'Trabaja en OCC',
          href: `${occDomain}empleos/bolsa-de-trabajo-occmundial-corporativo/`,
          title: 'Trabaja en OCC',
          rel: 'nofollow'
        }
      ]
    }
  ]
];

export const bottomLinks = isUserLogged => [
  {
    key: 1,
    id: 'terms-conditions-link',
    text: 'Términos y condiciones',
    href: `${occDomain}terminos-condiciones`
  },
  {
    key: 2,
    id: 'privacy-policy-link',
    text: 'Aviso de privacidad',
    href: `${occDomain}aviso-privacidad`
  },
  ...(isUserLogged
    ? [
        {
          key: 3,
          text: 'Contáctanos'
        }
      ]
    : []),
  {
    key: 4,
    text: 'Mapa de sitio',
    href: `${occDomain}Home/Mapa_del_Sitio`
  }
];
