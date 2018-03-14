import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/react';
import { TourTip, Icon } from '../../lib/index';

const stories = storiesOf('TourTip', module);
stories.addDecorator(withKnobs);

stories.add('TourTip', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>TourTip</h1>
            <div style={{position:'relative', background:'#999', paddingTop:'30px'}}>
                <div id="content" style={{background:'#c0cff0', width:'200px', height:'200px', marginLeft:'200px'}}>Content</div>
                <TourTip direction="left" align="top" target="content"><Icon iconName="search" colors={['#ffffff']} style={{marginRight:'5px'}} /> Some text</TourTip>
            </div>
        </div>
    ))