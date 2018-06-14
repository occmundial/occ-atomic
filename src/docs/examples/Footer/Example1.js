/* Simple Footer */
import React from 'react';
import { Footer } from '@occmundial/occ-atomic';

export default function Example1() {
    const buttons = [
        { id: 'occ', label: 'OCC', href:'https://occ.com.mx', target:'_blank' },
        { id: 'submenu', label: 'Item with submenu', sub: {
            id: 'submenu-items',
            items: [
                { id: 'subitem1', label: 'Sub-item 1', href:'#Footer' },
                { id: 'subitem2', label: 'Sub-item 2', href:'#Footer' }
            ]
        }}
    ];
    return (
        <Footer buttons={buttons} />
    )
}