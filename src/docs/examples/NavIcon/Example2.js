/* NavIcon with text below */
import React from 'react';
import { NavIcon, Card } from '@occmundial/occ-atomic';

class Example2 extends React.Component {

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
                <NavIcon iconName="panel" label="Activity" direction="col" width={80} selected={selected === 0} onClick={() => this.onChange(0)} />
                <NavIcon iconName="heart"  label="Liked" direction="col" width={80} selected={selected === 1} onClick={() => this.onChange(1)} />
                <NavIcon iconName="search" label="Search" direction="col" width={80} selected={selected === 2} onClick={() => this.onChange(2)} />
            </Card>
        );
    }
}

export default Example2;
