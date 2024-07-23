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
			<Flexbox display='flex' direction="col" style={{ gap: 20 }}>
				<Flexbox>
					<Tooltip placement="left" text="Left" open theme="dark">
						<Button size="md">Button with large content</Button>
					</Tooltip>
				</Flexbox>
				<Flexbox>
					<Tooltip placement="right" text="Right" open theme="dark">
						<Button size="md">Button</Button>
					</Tooltip>
				</Flexbox>
				<Flexbox>
					<Tooltip placement="left" text="Left" open theme="light">
						<Button size="md">Button</Button>
					</Tooltip>
				</Flexbox>
				<Flexbox>
					<Tooltip placement="right" text="Right" open theme="light">
						<Button size="md">Button</Button>
					</Tooltip>
				</Flexbox>
			</Flexbox>
		</Flexbox>
	);
}
