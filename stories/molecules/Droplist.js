import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs/react';
import { Droplist } from '../../lib/index';

const stories = storiesOf('Droplist', module);

stories.addDecorator(withKnobs);

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

const items2 = [
    {
        text: 'Países',
        items: [
            {
                text: 'México',
                textRight: '(3405)',
                key: 'MX',
                type: 'CO'
            }
        ]
    },
    {
        text: 'Estados',
        items: [
            {
                text: 'Querétaro',
                textRight: '(222)',
                key: 'QRO',
                type: 'ST'
            }
        ]
    },
    {
        text: 'Ciudades',
        items: [
            {
                text: 'Santiago de Querétaro',
                textRight: '(102)',
                key: 'QRO2',
                type: 'CY'
            }
        ]
    }    
];

stories.add('List items', () => {
    const term = text('Search term', '');
        return (
            <div>
                <h1 style={{fontFamily:'Open Sans'}}>List items</h1>
                <Droplist items={items} term={term} itemTextKey="text" itemTextRightKey="textRight" itemIdKey="text" />
            </div>
        )
    }).add('List groups', () => {
    const term2 = text('Search term', '');
        return (
            <div>
                <h1 style={{fontFamily:'Open Sans'}}>List groups</h1>
                <Droplist items={items2} term={term2} groups groupNameKey="text" groupIdKey="text" groupItemsKey="items" itemTextKey="text" itemTextRightKey="textRight" itemIdKey="key" />
            </div>
        )
    })