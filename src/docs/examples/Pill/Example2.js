/* Pill Choice */
import React from 'react';
import { Pill } from '@occmundial/occ-atomic';

export default class Example2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pills: [
                {
                    id:1,
                    value:10,
                    label:'Element 1'
                },
                {
                    id:2,
                    value:20,
                    label:'Element 2',
                    selected: true,
                    leftIcon: 'check'
                },
                {
                    id:3,
                    value:30,
                    label:'Element 3',
                    disabled: true,
                    leftIcon: 'cross'
                },
                {
                    id:4,
                    value:40,
                    label:'Element 4',
                    rightIcon: 'plus'
                }
            ]
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(id) {
        const { pills } = this.state;
        const index = pills.findIndex(pill => pill.id == id);
        pills[index].selected = !pills[index].selected;
        this.setState({
            pills
        });
    }

    render() {
        const { pills } = this.state;
        return (
            <Pill
                label="Label"
                choice={pills}
                assistiveText="Assistive Text"
                onChange={this.onChange}
            />
        );
    }
}
