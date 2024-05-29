/* Pill Group */
import React from 'react';
import { Pill } from '@occmundial/occ-atomic';

export default class Example1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pills: [
                {
                    id:1,
                    value:'10',
                    label:'Element 1'
                },
                {
                    id:2,
                    value:'20',
                    label:'Element 2'
                },
                {
                    id:3,
                    value:'30',
                    label:'Element 3',
                    disabled: true
                },
                {
                    id:4,
                    value:'40',
                    label:'Element 4'
                },
            ],
            selected: undefined
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(selected) {
        this.setState({
            selected
        });
    }

    render() {
        const { pills, selected } = this.state;
        return (
            <Pill
                label="Label"
                group={pills}
                assistiveText="Assistive Text"
                onChange={this.onChange}
                selected={selected}
            />
        );
    }
}
