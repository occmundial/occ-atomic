/* Pill Stack */
import React from 'react';
import { Pill, Text } from '@occmundial/occ-atomic';

export default class Example3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pills: [
                {
                    id:1,
                    label:'Element 1'
                },
                {
                    id:2,
                    label:'Element 2'
                },
                {
                    id:3,
                    label:'Element 3',
                    disabled: true
                },
                {
                    id:4,
                    label:'Element 4'
                }
            ],
            id: ''
        };
        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onClick(id) {
        this.setState({
            id
        });
    }
    onClose(id) {
        const { pills } = this.state;
        const index = pills.findIndex(pill => pill.id == id);
        pills.splice(index, 1);
        this.setState({
            pills
        });
    }

    render() {
        const { pills, id } = this.state;
        return (
            <div>
                <Pill
                    label="Label"
                    stack={pills}
                    assistiveText="Assistive Text"
                    onClick={this.onClick}
                    onClose={this.onClose}
                />
                {id && <Text>You clicked the item with the id: {id}</Text>}
            </div>
        );
    }
}
