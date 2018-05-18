import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/react';
import { Pager } from '../../lib/index';

const stories = storiesOf('Pager', module);
stories.addDecorator(withKnobs);

stories.add('Pager', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Pager</h1>
            <Pager />
        </div>
    ))