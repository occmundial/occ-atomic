/*SlideDown with custom title */
import React from 'react';
import { SlideDown, Text, Icon } from '@occmundial/occ-atomic';

export default function Example6() {
	return (
		<SlideDown
			customTitle={
				<div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
					<p style={{ margin: 0 }}>
						Custom <b>SlideDown</b> Title
					</p>
					<Icon iconName="search" width={16} height={16} />
				</div>
			}
			icon="globe"
			divider
		>
			<Text>Slidedown content.</Text>
		</SlideDown>
	);
}
