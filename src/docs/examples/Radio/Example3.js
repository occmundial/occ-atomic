/* Radio with text on the right */
import React from 'react';
import { Radio } from '@occmundial/occ-atomic';

const options = [
    {value:1, label:'Option 1', right: '(123)'},
    {value:2, label:'Option 2', right: '(548)'},
    {value:3, label:'Option 3', right: '(1002)'}
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
            <Radio options={options} selected={selected} />
        );
    }
}
