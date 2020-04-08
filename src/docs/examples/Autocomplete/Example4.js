/* Return the item on Enter */
import React from 'react';
import { Autocomplete } from '@occmundial/occ-atomic';

export default function Example4() {
    const items = [
        { text: 'Países', id:'1',
            items: [
                { text: 'México', textRight: '(3405)', key: 'MX', type: 'CO', id:'1.1' }
            ]
        },
        { text: 'Estados', id:'2',
            items: [
                { text: 'Querétaro', textRight: '(222)', key: 'QRO', type: 'ST', id:'2.1' },
                { text: 'Estado de México', textRight: '(225)', key: 'EMX', type: 'ST', id:'2.2' }
            ]
        },
        { text: 'Ciudades', id:'3',
            items: [
                { text: 'Santiago de Querétaro', textRight: '(102)', key: 'QRO2', type: 'CY', id:'3.1' }
            ]
        }
    ];
    return (
        <Autocomplete
            droplistProps={{
                items:items,
                itemIdKey:"key",
                itemTextKey:"text",
                itemTextRightKey:"textRight",
                groups: true,
                groupIdKey:"id",
                groupNameKey:"text",
                groupItemsKey:"items",
                // filter: false
            }}
            inputProps={{
                label:"Label",
                placeholder:"Placeholder"
            }}
            selectOnEnter
            onChange={(value) => {console.log(value);}}
            showRecentSearches
        />
    );
}
