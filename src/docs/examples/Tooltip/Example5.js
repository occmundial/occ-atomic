/* Fit */
import React from 'react';
import { Tooltip, Flexbox, Button } from '@occmundial/occ-atomic';

export default function Example5() {
	return (
		<Flexbox
			display="flex"
			justifyContent="center"
			alignItems="center"
			wrap="wrap"
		>
			<Flexbox flex-direction="col">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '110px' }}>
					<div style={{ marginTop: '50px' }}>
						<Tooltip text="This is a large text" open>
							<Button size="md">Button</Button>
						</Tooltip>
					</div>
					<Tooltip text="This is another large text" fit={true} open>
						<Button size="md">Button</Button>
					</Tooltip>
				</div>
			</Flexbox>
		</Flexbox>
	);
}
