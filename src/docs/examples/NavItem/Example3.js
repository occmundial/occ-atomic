/* NavItem small */
import React from 'react';
import { NavItem } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <NavItem link="#NavItem" small>NavItem content</NavItem>
            <NavItem link="#NavItem" small selected>NavItem content</NavItem>
            <NavItem link="#NavItem" small notification>Busco Personal</NavItem>
        </div>
    );
}
