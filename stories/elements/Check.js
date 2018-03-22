import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/react';
import { Check } from '../../lib/index';

const stories = storiesOf('Check', module);
stories.addDecorator(withKnobs);

stories.add('Check', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Check</h1>
            <Check id="1" onChange={(a, b) => {console.log(a, b);}} />
            <Check id="2" value={true} onChange={(a, b) => {console.log(a, b);}} />
            <Check id="2" value={true} onChange={(a, b) => {console.log(a, b);}} label="Label" />
            <Check id="2" value={true} onChange={(a, b) => {console.log(a, b);}} label="Label" right="(251)" />
        </div>
    ))