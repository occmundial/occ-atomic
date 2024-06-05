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
                    label:'Label',
                    leftIcon: 'person',
                    rightIcon: 'x'
                },
                {
                    id:2,
                    value:20,
                    label:'Label',
                    selected: true,
                    leftIcon: 'person',
                    rightIcon: 'x'
                },
                {
                    id:3,
                    value:30,
                    label:'Label',
                    selected: true,
                    disabled: true,
                    leftIcon: 'person',
                    rightIcon: 'x'
                },
                {
                    id:4,
                    value:40,
                    label:'Label',
                    disabled: true,
                    leftIcon: 'person',
                    rightIcon: 'x'
                },
                {
                    id:5,
                    value:50,
                    label:'Label',
                    leftIcon: 'person',
                    rightIcon: 'x'
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
