/* NavItem */
import React from 'react';
import { NavItem } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <NavItem>NavItem content</NavItem>
            <NavItem link="#NavItem" selected>NavItem content</NavItem>
            <NavItem link="#NavItem" notification>Busco Personal</NavItem>
        </div>
    );
}
