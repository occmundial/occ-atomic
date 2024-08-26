/* Tabs */
import React, { useState } from 'react';
import {
	Tabs,
	TabsProviderControlled,
	Tab,
	TabContent,
	Flexbox,
	Checkbox,
	Radio
} from '@occmundial/occ-atomic';

const initialState = {
	size: 1,
	withIcon: false,
	withCounter: false
};

const mappedSize = {
	1: 'large',
	2: 'medium',
	3: 'small'
};

export default function Example1() {
	const [value, setValue] = useState('value3');
	const [tabsProps, setTabsProps] = useState(initialState);

	return (
		<Flexbox
			display="flex"
			direction="col"
			justifyContent="start"
			style={{ gap: 32 }}
		>
			<TabsProviderControlled value={value} setCurrentValue={setValue}>
				<Tabs size={mappedSize[tabsProps.size]}>
					<Tab
						title="Title 1"
						icon={tabsProps.withIcon ? 'search' : ''}
						value="value"
						counter={tabsProps.withCounter ? '1' : ''}
					/>
					<Tab
						title="Title 2"
						icon={tabsProps.withIcon ? 'search' : ''}
						value="value2"
						counter={tabsProps.withCounter ? '10' : ''}
					/>
					<Tab
						title="Title 3"
						icon={tabsProps.withIcon ? 'search' : ''}
						value="value3"
						counter={tabsProps.withCounter ? '20' : ''}
					/>
					<Tab
						title="Title 4"
						icon={tabsProps.withIcon ? 'search' : ''}
						value="value4"
						counter={tabsProps.withCounter ? '30' : ''}
					/>
					<Tab
						title="Title 5"
						icon={tabsProps.withIcon ? 'search' : ''}
						value="value5"
						counter={tabsProps.withCounter ? '40' : ''}
					/>
					<Tab
						title="Title 6"
						icon={tabsProps.withIcon ? 'search' : ''}
						value="value6"
						counter={tabsProps.withCounter ? '50' : ''}
					/>
				</Tabs>
				<TabContent value="value">Contenido 1</TabContent>
				<TabContent value="value2">Contenido 2</TabContent>
				<TabContent value="value3">Contenido 3</TabContent>
				<TabContent value="value4">Contenido 4</TabContent>
				<TabContent value="value5">Contenido 5</TabContent>
				<TabContent value="value6">Contenido 6</TabContent>
			</TabsProviderControlled>
			<Flexbox
				display="flex"
				justifyContent="start"
				wrap="wrap"
				style={{ columnGap: '24px' }}
			>
				<Checkbox
					label="With Icon"
					value={tabsProps.withIcon}
					onChange={value =>
						setTabsProps(prevState => ({ ...prevState, withIcon: value }))
					}
				/>
				<Checkbox
					label="With Counter"
					value={tabsProps.withCounter}
					onChange={value =>
						setTabsProps(prevState => ({ ...prevState, withCounter: value }))
					}
				/>
				<Radio
					options={[
						{ value: 1, label: 'Large' },
						{ value: 2, label: 'Medium' },
						{ value: 3, label: 'Small' }
					]}
					onChange={value =>
						setTabsProps(prevState => ({ ...prevState, size: value }))
					}
					selected={tabsProps.size}
				/>
			</Flexbox>
		</Flexbox>
	);
}
