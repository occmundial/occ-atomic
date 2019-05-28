/* NavTab */
import React from 'react';
import { NavTab, Icon, colors } from '@occmundial/occ-atomic';

class Example5 extends React.Component {

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
        const flexCenter = [
            {
                key:1,
                type:'icon',
                iconName:'panel',
                label: 'Dashboard',
                selected: selected === 'dashboard',
                onClick: () => this.onChange('dashboard'),
                direction: 'col',
                width: 96
            },
            {
                key:2,
                type:'icon',
                iconName:'search',
                label: 'Search',
                selected: selected === 'search',
                onClick: () => this.onChange('search'),
                direction: 'col',
                width: 96
            },
            {
                key:3,
                type:'icon',
                iconName:'user',
                label: 'Profile',
                selected: selected === 'profile',
                onClick: () => this.onChange('profile'),
                direction: 'col',
                width: 96
            }
        ];
        return (
            <div>
                <NavTab blue flexCenter={flexCenter} />
                <NavTab flexCenter={flexCenter} />
            </div>
        );
    }
}

export default Example5;
