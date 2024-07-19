/* Placement Sides */
import React from 'react';
import { Tooltip, Flexbox, Button } from '@occmundial/occ-atomic';

export default function Example4() {
	return (
		<Flexbox
			display="flex"
			justifyContent="center"
			alignItems="center"
			wrap="wrap"
		>
			<Flexbox flex-direction="col">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<Tooltip placement="left" text="Left" open theme="dark">
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip placement="right" text="Right" open theme="dark">
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip placement="left" text="Left" open theme="light">
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip placement="right" text="Right" open theme="light">
						<Button size="md">Button</Button>
					</Tooltip>
				</div>
			</Flexbox>
		</Flexbox>
	);
}
