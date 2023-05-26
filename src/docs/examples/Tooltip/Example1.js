/* Themes */
import React from 'react';
import { Tooltip, Flexbox, Button } from '@occmundial/occ-atomic';

export default function Example1() {
	return (
		<Flexbox
			display="flex"
			justifyContent="center"
			alignItems="center"
			wrap="wrap"
		>
			<Flexbox flex-direction="col">
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '80px',
						marginTop: '50px'
					}}
				>
					<Tooltip text="Light Theme" theme="light" open>
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip text="Dark Theme" theme="dark" open>
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip text="Purple Theme" theme="purple" open>
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip text="Info Theme" theme="info" open>
						<Button size="md">Button</Button>
					</Tooltip>
				</div>
			</Flexbox>
		</Flexbox>
	);
}
