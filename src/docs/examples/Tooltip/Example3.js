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
				<div style={{ display: 'flex', flexDirection: 'column', gap: '70px' }}>
					<Tooltip placement="bottom" text="Bottom" open>
						<Button size="md">Button</Button>
					</Tooltip>
					<Tooltip placement="bottom-start" text="Bottom-start" open>
						<Button size="md">Button</Button>
					</Tooltip>
					<div style={{ marginBottom: '50px' }}>
						<Tooltip placement="bottom-end" text="Botton-end" open>
							<Button size="md">Button</Button>
						</Tooltip>
					</div>
				</div>
			</Flexbox>
		</Flexbox>
	);
}
