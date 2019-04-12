/* OrderBy */
import React from 'react';
import { OrderBy } from '@occmundial/occ-atomic';

export default class Example1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        };
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(selected) {
        this.setState({
            selected
        });
    }

    render() {
        const { selected } = this.state;

        const options = [
            {value:1, text:'Price'},
            {value:2, text:'Date'},
            {value:3, text:'Name'}
        ];

        return (
            <div style={{ float:'right' }}>
                <OrderBy text="Order by" options={options} selected={selected} onChange={this.changeSelected} />
            </div>
        );
    }
}
