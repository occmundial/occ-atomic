/* Placement Top */
import React from 'react';
import { Tooltip, Flexbox, Button, Grid } from '@occmundial/occ-atomic';

export default function Example2() {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Col xxs={{ col: 12 }} sm={{ col: 6 }}>
					<Tooltip placement="top" text="This is the tooltip message placed at top" open>
						<Button icon="plus"></Button>
					</Tooltip>
				</Grid.Col>
				<Grid.Col xxs={{ col: 12 }} sm={{ col: 6 }}>
					<Tooltip placement="top-start" text="This is the tooltip message placed at top-start" open>
						<Button icon="plus"></Button>
					</Tooltip>
				</Grid.Col>
				<Grid.Col xxs={{ col: 12 }} sm={{ col: 6 }} style={{ paddingTop: 80 }}>
					<Tooltip placement="top-end" text="This is the tooltip message placed at top-end" open>
						<Button icon="plus"></Button>
					</Tooltip>
				</Grid.Col>
			</Grid.Row>
		</Grid>
	);
}
