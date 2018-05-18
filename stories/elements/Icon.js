import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/react';
import { Icon } from '../../lib/index';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Icon with custom color', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Icon</h1>
            <Icon iconName="plus" colors={['#000']} />
        </div>
    )).add('Icon with onClick', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Icon with onClick</h1>
            <Icon iconName="plus" colors={['#000']} onClick={() => { console.log("click");}} />
        </div>
    )).add('Icon with hover color', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Icon with hover color</h1>
            <Icon iconName="plus" colors={['#000']} hover={['#f00']} />
        </div>
    )).add('Icon with custom size', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Icon with custom size</h1>
            <Icon iconName="plus" colors={['#000']} width={100} height={100} />
        </div>
    ))