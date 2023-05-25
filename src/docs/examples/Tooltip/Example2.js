/* Placement Top */
import React from 'react';
import { Tooltip, Flexbox, Button } from '@occmundial/occ-atomic';

export default function Example2() {
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
						gap: '70px',
						marginTop: '50px'
					}}
				>
					<Tooltip placement="top" text="Top" open>
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip placement="top-start" text="Top-start" open>
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip placement="top-end" text="Top-end" open>
						<Button size="md">Button</Button>
					</Tooltip>
				</div>
			</Flexbox>
		</Flexbox>
	);
}
