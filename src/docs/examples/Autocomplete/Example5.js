/* Autocomplete shows initial data*/
import React from 'react';
import { Autocomplete } from '@occmundial/occ-atomic';

export default function Example5() {
	const items = [
		{ name: 'Item 1', secondary: '(10)', iconName: 'clock', extraText: '+ 4 filtros' },
		{ name: 'Item 2', secondary: '(5)', iconName: 'clock' , extraText: '+ 8 filtros'},
		{ name: 'Item 3', secondary: '(30)', iconName: 'searchSolid' }
	];
	return (
		<Autocomplete
			droplistProps={{
				items: items,
				itemIdKey: 'name',
				itemTextKey: 'name',
				itemTextRightKey: 'secondary'
			}}
			inputProps={{
				label: 'Label',
				placeholder: 'Placeholder'
			}}
			selectOnEnter
			onChange={value => {
				console.log(value);
			}}
			showInitialData
		/>
	);
}
