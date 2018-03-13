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
        const { type, knobs } = this.props;
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
        if (type == "default") {
            return (
                <div>
                    <Autocomplete
                        label="Label"
                        placeholder="Placeholder"
                        items={items}
                        itemTextKey="text"
                        itemTextRightKey="textRight"
                        itemIdKey="text"
                        onChange={this.onChange}
                    />
                </div>
            );
        } else if (type == "item") {
            return (
                <div>
                    <Autocomplete
                        label="Label"
                        placeholder="Placeholder"
                        items={items}
                        itemTextKey="text"
                        itemTextRightKey="textRight"
                        itemIdKey="text"
                        onClick={this.onClick}
                    />
                </div>
            );
        } else if (type == "stack") {
            return (
                <div>
                    <Autocomplete
                        label="Label"
                        placeholder="Placeholder"
                        limitPlaceholder="Limit of 2 options"
                        items={items}
                        itemTextKey="text"
                        itemTextRightKey="textRight"
                        itemIdKey="text"
                        onClick={this.onClick}
                        stackLabels
                        limit={2}
                    />
                </div>
            );
        } else if (type == "playground") {
            return (
                <div>
                    <Autocomplete
                        label={knobs.label}
                        placeholder={knobs.placeholder}
                        onFocus={knobs.onFocus ? () => {console.log('onFocus');} : () => {}}
                        onChange={knobs.onChange ? (value) => {console.log('onChange', value);} : () => {}}
                        onBlur={knobs.onBlur ? () => {console.log('onBlur');} : () => {}}
                        items={JSON.parse(knobs.items)}
                        groups={knobs.groups}
                        groupNameKey={knobs.groupNameKey}
                        groupIdKey={knobs.groupIdKey}
                        groupItemsKey={knobs.groupItemsKey}
                        itemTextKey={knobs.itemTextKey}
                        itemTextRightKey={knobs.itemTextRightKey}
                        itemIdKey={knobs.itemIdKey}
                        onClick={knobs.onClick ? (item) => {console.log('onClick', item);} : () => {}}
                        stackLabels={knobs.stackLabels}
                        limit={knobs.limit}
                        limitPlaceholder={knobs.limitPlaceholder}
                    />
                </div>
            );
        }
    }
}

stories.add('Default', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Default</h1>
            <AutocompleteWrapper type="default" />
        </div>
    )).add('Return item', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Return item</h1>
            <AutocompleteWrapper type="item" />
        </div>
    )).add('Stack labels', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Stack labels</h1>
            <AutocompleteWrapper type="stack" />
        </div>
    )).add('Playground', () => {
        const label = text('label', 'Label');
        const placeholder = text('placeholder', 'Placeholder');
        const onFocus = boolean('onFocus', false);
        const onChange = boolean('onChange', false);
        const onBlur = boolean('onBlur', false);
        const items = text('items', JSON.stringify(
            [
                {
                    item: 'text1',
                    right: '(201)'
                },
                {
                    item: 'text2',
                    right: '(305)'
                },
                {
                    item: 'text3',
                    right: '(2)'
                }
            ]
        ));
        const groups = boolean('groups', false);
        const groupNameKey = text('groupNameKey', '');
        const groupIdKey = text('groupIdKey', '');
        const groupItemsKey = text('groupItemsKey', '');
        const itemTextKey = text('itemTextKey', 'item');
        const itemTextRightKey = text('itemTextRightKey', '');
        const itemIdKey = text('itemIdKey', 'item');
        const onClick = boolean('onClick', false);
        const stackLabels = boolean('stackLabels', false);
        const limit = number('limit', 2);
        const limitPlaceholder = text('limitPlaceholder', '');
        const knobsObj = {
            label,
            placeholder,
            onFocus,
            onChange,
            onBlur,
            items,
            groups,
            groupNameKey,
            groupIdKey,
            groupItemsKey,
            itemTextKey,
            itemTextRightKey,
            itemIdKey,
            onClick,
            stackLabels,
            limit,
            limitPlaceholder
        };
        return (
            <div>
                <h1 style={{fontFamily:'Open Sans'}}>Playground</h1>
                <AutocompleteWrapper type="playground" knobs={knobsObj} />
            </div>
        )
    })