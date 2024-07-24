/* Placement Bottom */
import React from 'react';
import { Tooltip, Flexbox, Button } from '@occmundial/occ-atomic';

export default function Example3() {
	return (
		<Flexbox
			display="flex"
			justifyContent="center"
			alignItems="center"
			wrap="wrap"
		>
			<Flexbox flex-direction="col">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '70px', alignItems: 'center' }}>
					<Tooltip placement="bottom" text="Bottom" open theme="dark">
						<Button size="md">Button with large content</Button>
					</Tooltip>
					<Tooltip placement="bottom-start" text="Bottom-start large content" open theme="dark">
						<Button size="md">Button</Button>
					</Tooltip>
					<div style={{ marginTop: '8px' }}>
						<Tooltip placement="bottom-end" text="Botton" open theme="dark">
							<Button size="md">Button with large content</Button>
						</Tooltip>
					</div>
				</div>
			</Flexbox>
		</Flexbox>
	);
}
