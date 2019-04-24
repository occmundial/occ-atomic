/* NavItem */
import React from 'react';
import { NavItem, colors } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div style={{background: colors.prim}}>
            <NavItem white link="#NavItem">NavItem content</NavItem>
            <NavItem white link="#NavItem" selected>NavItem content</NavItem>
            <NavItem white link="#NavItem" notification>Busco Personal</NavItem>
        </div>
    );
}
