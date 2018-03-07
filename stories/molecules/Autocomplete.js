import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { Autocomplete } from '../../lib/index';

const stories = storiesOf('Autocomplete', module);
stories.addDecorator(withKnobs);

class AutocompleteWrapper extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    
    onChange(value) {
        console.log(value);
    }
    onClick(item) {
        console.log(item);
    }
    
    render() {
        const items = [
            {
                text: 'Administrador',
                textRight: '(222)'
            },
            {
                text: 'Administrador Sr',
                textRight: '(134)'
            },
            {
                text: 'Administrador Jr',
                textRight: '(52)'
            },
            {
                text: 'Administrar',
                textRight: '(6)'
            },
        ];
        return (
            <div>
                <Autocomplete
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    limitPlaceholder="Limit of 2 options"
                    items={items}
                    itemTextKey="text"
                    itemTextRightKey="textRight"
                    itemIdKey="text"
                    onChange={this.onChange}
                    onClick={this.onClick}
                    stackLabels
                    limit={2}
                />
            </div>
        );
    }
}

stories.add('Autocomplete', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Autocomplete</h1>
            <AutocompleteWrapper />
        </div>
    ))