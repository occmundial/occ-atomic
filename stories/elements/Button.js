import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../lib/index';

storiesOf('Button', module)
    .add('Themes', () => (
        <div>
            <Button theme="main">Main</Button>
            <Button theme="secondary">Secondary</Button>
            <Button theme="flat">Flat</Button>
            <Button theme="blue">Blue</Button>
            <Button theme="main" disabled>Main disabled</Button>
            <Button theme="secondary" disabled>Secondary disabled</Button>
            <Button theme="flat" disabled>Flat</Button>
            <Button theme="blue" disabled>Blue</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Big</Button>
            <Button icon="apple">Icon</Button>
        </div>
    ))
; 