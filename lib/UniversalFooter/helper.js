
const base = `https://occ.com.mx`;
const baseEmpresas = `https://occ.com.mx/empresas`;
const contentArrays={
    empresas : [
        {
          item: "Busco talento / Publicar Vacante",
          link: `${baseEmpresas}/`,
          id: "1",
          samePage: true
        },
        {
          item: "Ayuda para reclutadores",
          link: `${baseEmpresas}/ayuda/`,
          id: "2"
        },
        {
          item: "¿Cómo publicar vacantes?",
          link: `${baseEmpresas}/publicacion-de-vacantes/`,
          id: "3",
          samePage: true
        },
        {
          item: "Preguntas frecuentes de reclutadores",
          link:
            "https://empresas.occ.com.mx/ayuda/hc/es/articles/360005770233-Preguntas-frecuentes-para-reclutadores",
          id: "4"
        }
      ],
      productos : [
        {
            item: "OCCEducación",
            link: `${
             base
            }/educacion`,
            id: "1"
          },
        {
          item: "OCClisting",
          link: `${base}/listing?utm_source=empresas&utm_medium=referral&utm_campaign=footer`,
          id: "2"
        },
        {
          item: "Red Universitaria de Empleo (RUE)",
          link: `${base}/rue/contacto/?utm_source=empresas&utm_medium=referral&utm_campaign=footer`,
          id: "3"
        }
      ],
      candidatos : [
        {
          item: "Buscar trabajo",
          link:
            "https://www.occ.com.mx/?utm_source=empresas&utm_medium=referral&utm_campaign=footer",
          id: "1"
        },
        {
          item: "Crear cuenta para buscar trabajo",
          link:
            "https://www.occ.com.mx/Cuenta/Nueva?utm_source=empresas&utm_medium=referral&utm_campaign=footer",
          id: "2"
        },
        {
          item: "Preguntas Frecuentes",
          link: "https://www.occ.com.mx/ayuda",
          id: "3"
        },
        {
          item: "Perfiles Laborales",
          link:
            "https://www.occ.com.mx/perfiles-laborales/?utm_source=empresas&utm_medium=referral&utm_campaign=footer",
          id: "4"
        },
        {
          item: "Perfiles de Empresas",
          link:
            "https://www.occ.com.mx/perfiles-empresas/?utm_source=empresas&utm_medium=referral&utm_campaign=footer",
          id: "5"
        }
      ],
      listOCC: [
        {
          item: "Acerca de OCCMundial",
          link:
            "https://www.occ.com.mx/nosotros/?utm_source=empresas&utm_medium=referral&utm_campaign=footer",
          id: "1"
        },
        {
          item: "Blog",
          link:
            "https://www.occ.com.mx/blog/?utm_source=empresas&utm_medium=referral&utm_campaign=footer",
          id: "2"
        },
        {
          item: "Trabaja en OCCMundial",
          link:
            "https://www.occ.com.mx/empleos/bolsa-de-trabajo-occmundial-corporativo/?utm_source=empresas&utm_medium=referral&utm_campaign=footer",
          id: "3"
        },
        { item: "Nuestras Apps:", id: "4" }
      ],
      sitio : [
        {
          item: "Términos y condiciones del servicio",
          link: "https://www.occ.com.mx/Ayuda/Terminos_Condiciones",
          id: "1"
        },
        {
          item: "Aviso de privacidad OCCMundial",
          link: "https://www.occ.com.mx/Ayuda/Aviso_Privacidad",
          id: "2"
        },
        { item: "Mapa del sitio", link: `${base}/mapa-del-sitio`, id: "3" }
      ],
      socialMedia: [
        {
          item: 'facebook',
          link: "https://www.facebook.com/occmundial/?fref=ts",
          id: "1"
        },
        { item: 'youtube', link: "https://www.youtube.com/user/OCCMundial", id: "2" },
        { item: 'twitter', link: "https://twitter.com/occmundial", id: "3" }
      ],
      appStores:[
        {
          item: 'apple',
          link:
            "https://itunes.apple.com/app/apple-store/id1070287776?pt=1629020&ct=footer_home_sight&mt=8",
          id: "1"
        },
        {
          item: 'android',
          link:
            "https://play.google.com/store/apps/details?id=mx.com.occ.reclutadores&referrer=utm_source%3Dfooter_home_sight",
          id: "2"
        }
      ],
      presence: [
        {
          item: "SEEK — Australia",
          link: "https://www.seek.com.au/",
          id: "1"
        },
        {
          item: "Bdjobs — Bangladesh",
          link: "https://www.bdjobs.com/",
          id: "3"
        },
        {
          item: "Catho — Brazil",
          link: "https://www.catho.com.br/",
          id: "5"
        },
        {
          item: "Jobberman — W Africa",
          link: "https://www.jobberman.com/",
          id: "6"
        },
        {
          item: "jobsDB — SE Asia",
          link: "https://www.jobsdb.com/",
          id: "7"
        },
        {
          item: "JobStreet — SE Asia",
          link: "https://www.jobstreet.com/",
          id: "8"
        },
        {
          item: "Jora — México",
          link: "https://mx.jora.com/",
          id: "9"
        },
        {
          item: "Jora — Worldwide",
          link: "https://www.jora.com/",
          id: "10"
        },
        {
          item: "Workana — Latin America",
          link: "https://www.workana.com/",
          id: "12"
        },
        {
          item: "Zhaopin — China",
          link: "https://www.zhaopin.com/",
          id: "13"
        }
      ]
    };

export const selectArray= (arrayName, filter=[], extra=[]) =>{
    let selected = contentArrays[arrayName];
    filter.map(key =>
        selected = selected.filter(({id})=>id !== key)
    );
    selected = [...selected, ...extra];
    return selected;
}