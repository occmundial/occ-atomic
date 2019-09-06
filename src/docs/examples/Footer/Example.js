/*Universal Footer*/
import React from 'react';
import { Footer } from '@occmundial/occ-atomic';

const columns = [
	[
		{
			key: 0,
			title: 'Candidatos',
			items: [
				{
					type: 'link',
					text: 'Crear cuenta grátis',
					href: 'http://occ.com.mx',
					key: '1',
					target: '_self'
				},
				{
					type: 'link',
					text: 'Iniciar Sesión',
					href: 'http://occ.com.mx',
					key: '2',
					target: '_blank'
				},
				{
					type: 'link',
					text: 'Perfiles laborales',
					href: 'http://occ.com.mx',
					key: '3'
				},
				{
					type: 'link',
					text: 'Preguntas frecuentes',
					href: 'http://occ.com.mx',
					key: '4'
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
					text: 'Por estado',
					href: 'http://occ.com.mx',
					key: '1',
					target: '_self'
				},
				{
					type: 'link',
					text: 'Por ciudad',
					href: 'http://occ.com.mx',
					key: '2',
					target: '_blank'
				},
				{
					type: 'link',
					text: 'Por categoría',
					href: 'http://occ.com.mx',
					key: '3'
				},
				{
					key: '4',
					type: 'icon',
					iconName: 'skypeSolid',
					onClick: () => {}
				},
				{
					key: '5',
					type: 'icon',
					iconName: 'twitterSolid',
					onClick: () => {}
				},
				{
					key: '6',
					type: 'icon',
					iconName: 'facebookSolid',
					href: 'fb.com',
					target: '_blank',
					onClick: () => (window.location = 'holi.com')
				},
				{
					key: '7',
					type: 'custom',
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
			title: 'Presencia mundial',
			collapse: true,
			items: [
				{
					type: 'link',
					text: 'OCCListing',
					href: 'http://occ.com.mx',
					key: '1',
					target: '_self'
				},
				{
					type: 'link',
					text: 'OCCEducación',
					href: 'http://occ.com.mx',
					key: '2',
					target: '_blank'
				}
			]
		}
	]
];

const bottomLinks = [
	{ href: 'http://occ.com.mx', text: 'Términos y condiciones', key: 1 },
	{ href: 'http://occ.com.mx', text: 'Aviso de privacidad', key: 2 },
	{ href: 'http://occ.com.mx', text: 'Mapa del sitio', key: 3 }
];

const copy = 'OCCMundial D.R. © 1996-2018 Derechos reservados.';
const aux = {
	text: 'ayuda',
	href: 'localhost',
	target: '_self',
	iconRight: 'info'
};

export default function Example() {
	return (
		<Footer
			columns={columns}
			bottomLinks={bottomLinks}
			copyText={copy}
			aux={aux}
		/>
	);
}
