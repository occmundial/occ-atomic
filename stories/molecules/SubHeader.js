import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { SubHeader } from '../../lib/index';

const stories = storiesOf('SubHeader', module);
stories.addDecorator(withKnobs);

stories.add('SubHeader', () => (
        <div>
            <SubHeader theme="blue" left="Text or button" right="Text or button" center="SubHeader" />
            <h1 style={{fontFamily:'Open Sans'}}>SubHeader</h1>
        </div>
    )).add('SubHeader2', () => (
        <div>
            <SubHeader theme="white" left="Text or button" right="Text or button" center="SubHeader" />
            <h1 style={{fontFamily:'Open Sans'}}>SubHeader2</h1>
        </div>
    ))