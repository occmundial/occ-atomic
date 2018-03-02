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
            value: '',
            focus: false
        };
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(value) {
        this.setState({
            value
        });
    }
    
    render() {
        const { value } = this.state;
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
                    placeholder="Placeholder"
                    items={items}
                    itemTextKey="text"
                    itemTextRightKey="textRight"
                    itemIdKey="text"
                    valueProp={value}
                    onChange={this.onChange}
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