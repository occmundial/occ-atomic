/*Universal Footer*/
import React from 'react';
import { Footer } from '@occmundial/occ-atomic';

const columns = [
	[
		{
			key: 0,
			title: 'Column 1',
			items: [
				{
					type: 'link',
					key: '1',
					text: 'Link 1',
					href: '#Footer',
					target: '_self'
				},
				{
					type: 'link',
					key: '2',
					text: 'Link 2',
					href: '#Footer',
					target: '_blank'
				},
				{ type: 'link', key: '3', text: 'Link 3', href: '#Footer' },
				{ type: 'link', key: '4', text: 'Link 4', href: '#Footer' }
			]
		}
	],
	[
		{
			key: 1,
			title: 'Column 2',
			items: [
				{
					type: 'link',
					key: '1',
					text: 'Link 5',
					href: '#Footer',
					target: '_self'
				},
				{
					type: 'link',
					key: '2',
					text: 'Link 6',
					href: '#Footer',
					target: '_blank'
				},
				{ type: 'link', key: '3', text: 'Link 7', href: '#Footer' },
				{
					type: 'icon',
					key: '4',
					iconName: 'skypeSolid',
					onClick: () => console.log('Skype icon cliked!')
				},
				{
					type: 'icon',
					key: '5',
					iconName: 'twitterSolid',
					onClick: () => console.log('Twitter icon clicked!')
				},
				{
					type: 'icon',
					key: '6',
					iconName: 'facebookSolid',
					href: 'fb.com',
					target: '_blank',
					onClick: () => console.log('facebook icon clicked!')
				},
				{
					type: 'custom',
					key: '7',
					custom: (
						<a href="#Footer">
							<img src="http://placehold.it/70x30" />
						</a>
					)
				}
			]
		},
		{
			key: 2,
			title: 'Sub column',
			collapse: true,
			items: [
				{
					type: 'link',
					key: '1',
					text: 'Link 8',
					href: '#Footer',
					target: '_self'
				},
				{
					type: 'link',
					key: '2',
					text: 'Link 9',
					href: '#Footer',
					target: '_blank'
				}
			]
		}
	]
];

const bottomLinks = [
	{ href: '#Footer', key: '1', text: 'Link 10', testId: 'link-10' },
	{ href: '#Footer', key: '2', text: 'Link 11', testId: 'link-11' },
	{ href: '#Footer', key: '3', text: 'Link 12', testId: 'link-12' },
	{
		onClick: () => console.log('This one calls a function'),
		key: '4',
		text: 'Link 13'
	}
];

const copy = `OCC-Atomic © ${new Date().getFullYear()} Copyright stuff`;
const aux = {
	text: 'Auxiliar button',
	href: '#Footer',
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
