/* NavTab with NavIcons switching */
import React from 'react';
import { NavTab, Icon, colors } from '@occmundial/occ-atomic';

class Example3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(selected) {
        this.setState({ selected });
    }

    render() {
        const { selected } = this.state;
        const left = [
            {
                key:1,
                type: 'logo',
                logo: (
                    <a href="#NavTab">
                        <Icon iconName="occHorizontalWhite" colors={[colors.bgWhite]} />
                    </a>
                )
            }
        ];
        const left2 = [
            {
                key:1,
                type: 'logo',
                logo: (
                    <a href="#NavTab">
                        <Icon iconName="occHorizontalGrey" colors={[colors.grey700]} />
                    </a>
                )
            }
        ];
        const right = [
            {
                key:1,
                type:'icon',
                iconName:'cart',
                selected: selected === 'cart',
                onClick: () => this.onChange('cart'),
                showBar: true
            },
            {
                key:2,
                type:'icon',
                iconName:'messages',
                selected: selected === 'messages',
                onClick: () => this.onChange('messages'),
                showBar: true
            },
            {
                key: 3,
                type: 'button',
                text: 'Juan Alvez',
                size: 'md',
                theme: 'tertiaryWhite'
            }
        ];
        const center = [
            {
                key:1,
                type:'icon',
                iconName:'panel',
                label: 'Dashboard',
                selected: selected === 'dashboard',
                onClick: () => this.onChange('dashboard'),
                showBar: true
            },
            {
                key:2,
                type:'icon',
                iconName:'search',
                label: 'Search',
                selected: selected === 'search',
                onClick: () => this.onChange('search'),
                showBar: true
            },
            {
                key:3,
                type:'icon',
                iconName:'user',
                label: 'Profile',
                selected: selected === 'profile',
                onClick: () => this.onChange('profile'),
                showBar: true
            }
        ];
        const right2 = [...right];
        right2[2] = {
            key: 3,
            type: 'button',
            text: 'Juan Alvez',
            size: 'md',
            theme: 'ghostGrey'
        };
        return (
            <div>
                <NavTab blue left={left} center={center} right={right} />
                <NavTab left={left2} center={center} right={right2} />
            </div>
        );
    }
}

export default Example3;
