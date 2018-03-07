import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/react';
import { Label } from '../../lib/index';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);

stories.add('Label', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Label</h1>
            <Label onClose={() => { console.log("close");}} onClick={() => { console.log("click");}}>Whatever</Label>
        </div>
    ))