/* NavIcon */
import React from 'react';
import { NavIcon, Card } from '@occmundial/occ-atomic';

class Example1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    onChange(selected) {
        this.setState({ selected });
    }

    render() {
        const { selected } = this.state;
        return (
            <Card noPadding style={{height: 64, display: 'flex'}}>
                <NavIcon iconName="panel" label="Activity" width={120} selected={selected === 0} onClick={() => this.onChange(0)} showBar />
                <NavIcon iconName="heart"  label="Liked" width={120} selected={selected === 1} onClick={() => this.onChange(1)} showBar />
                <NavIcon iconName="search" label="Search" width={120} selected={selected === 2} onClick={() => this.onChange(2)} showBar />
            </Card>
        );
    }
}

export default Example1;
