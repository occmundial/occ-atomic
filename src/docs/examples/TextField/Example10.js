/* Simple SearchField */
import React, {useState} from 'react';
import { TextField } from '@occmundial/occ-atomic';

export default function Example10() {
    const [value, setValue] = useState('');
    return (
        <TextField
            label="Label"
            placeholder="Placeholder"
            assistiveText="Assistive text"
            searchField
            iconName="searchSolid"
            valueProp={value}
            onChange={setValue}
            error={value !== 'foo'}
        />
    );
}
