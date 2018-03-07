import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { LayerApp, Title } from '../../lib/index';

const stories = storiesOf('LayerApp', module);
stories.addDecorator(withKnobs);

stories.add('LayerApp', () => (
        <div>
            <LayerApp theme="white" left="Text or button" right="Text or button" center="LayerApp">
                <Title h={1}>Layer content</Title>
            </LayerApp>
        </div>
    )).add('LayerApp2', () => (
        <div>
            <LayerApp left="Text or button" right="Text or button" center="LayerApp">
                <Title h={1}>Layer content</Title>
            </LayerApp>
        </div>
    ))
    