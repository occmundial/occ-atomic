/*Universal Footer*/
import React from "react";
import { UniversalFooter } from "@occmundial/occ-atomic";

const columns = [
  [
    {
      key: 0,
      title: "Empresas",
      items: [
        {
          type: "link",
          text: "Busco talento / Publicar Vacante",
          href: "http://occ.com.mx",
          key: "1",
          target: "_self"
        },
        {
          type: "link",
          text: "Busco talento 2 / Publicar Vacante",
          href: "http://occ.com.mx",
          key: "2",
          target: "_blank"
        },
        {
          type: "link",
          text: "Busco talento 3/ Publicar Vacante",
          href: "http://occ.com.mx",
          key: "3"
        }
      ]
    }
  ],
  [
    {
      key: 1,
      title: "Empresas",
      items: [
        {
          type: "link",
          text: "Busco talento / Publicar Vacante",
          href: `holi/`,
          key: "1",
          target: "_self"
        },
        {
          type: "link",
          text: "Busco talento 2 / Publicar Vacante",
          href: `holi2/`,
          key: "2",
          target: "_blank"
        },
        {
          type: "link",
          text: "Busco talento 3/ Publicar Vacante",
          href: `holi23/`,
          key: "3"
        },
        {
          key: "4",
          type: "icon",
          iconName: "skypeSolid",
          onClick: () => {}
        },
        {
          key: "5",
          type: "icon",
          iconName: "twitterSolid",
          onClick: () => {}
        },
        {
          key: "6",
          type: "icon",
          iconName: "facebookSolid",
          href: "fb.com",
          target: "_blank",
          onClick: () => (window.location = "holi.com")
        },
        {
          key: "7",
          type: "custom",
          custom: (
            <a href="#">
              <img src="http://placehold.it/70x30" />
            </a>
          )
        }
      ]
    },
    {
      key: 2,
      title: "No Empresas",
      collapse: true,
      items: [
        {
          type: "link",
          text: "Busco talento / Publicar Vacante",
          href: `holi/`,
          key: "1",
          target: "_self"
        },
        {
          type: "link",
          text: "Busco talento 2 / Publicar Vacante",
          href: `holi2/`,
          key: "2",
          target: "_blank"
        }
      ]
    }
  ]
];

const bottomLinks = [
  { href: "localhost", text: "item 1", key: 1 },
  { href: "localhost", text: "item 2", key: 2 },
  { href: "localhost", text: "item 2", key: 3 }
];

const copy = "OCCMundial D.R. © 1996-2018 Derechos reservados.";
const aux = {
  text: "ayuda",
  href: "localhost",
  target: "_self",
  iconRight: "info"
};

export default function Example() {
  return (
    <UniversalFooter
      columns={columns}
      bottomLinks={bottomLinks}
      copyText={copy}
      aux={aux}
    />
  );
}
