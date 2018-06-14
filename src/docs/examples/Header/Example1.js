/* Simple Header */
import React from 'react';
import { Header, SightLogo, Nav, Menu } from '@occmundial/occ-atomic';

export default function Example1() {
    const nav = [
        { id: 'item1', icon:'search', label: 'Search' },
        { id: 'item2', icon:'filter', label: 'Filters'},
        { id: 'item3', icon:'like', label: 'Stuff' },
    ];
    const menu = [
        { id: 'menu1', href:'#Header', label: 'Item 1' },
        { id: 'menu2', href:'#Header', label: 'Item 2' },
        "separator",
        { id: 'menu3', href:'#Header', label: 'Item 3', type:"signOut" },
    ]
    return (
        <Header
            logo={<SightLogo />}
            nav={<Nav active="item1" navigate={() => {console.log('Item clicked');}} buttons={nav} />}
            menu={<Menu label="User menu" buttons={menu} />}
        />
    )
}