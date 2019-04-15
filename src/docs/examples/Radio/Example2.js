/* Disabled option */
import React from 'react';
import { Radio } from '@occmundial/occ-atomic';

const options = [
    {value:1, label:'Option 1'},
    {value:2, label:'Option 2'},
    {value:3, label:'Option 3', disabled: true}
];

export default class Example1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(selected) {
        this.setState({
            selected
        });
    }

    render() {
        const { selected } = this.state;
        return (
            <div style={{display:'inline-block'}}>
                <Radio options={options} selected={selected} />
            </div>
        );
    }
}
