import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { Button } from '../../lib/index';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const styles = {
    s: {
        display:'inline-block',
        marginRight:'15px',
        marginBottom:'15px'
    }
};

const S = ({classes, children}) => (
    <div className={classes.s}>{children}</div>
);

const Space = injectSheet(styles)(S);

const targetOptions = {
    '': '',
    '_blank': '_blank',
    '_self': '_self',
    '_parent': '_parent',
    '_top': '_top'
};

const sizeOptions = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Big'
};

const themeOptions = {
    main: 'Main',
    secondary: 'Secondary',
    flat: 'Flat',
    blue: 'Blue'
};

let theme;
let size;
let disabled;
let icon;
let loading;
let onClick;
let href;
let target;

stories.add('Themes', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Themes</h1>
            <Space><Button theme="main">Main</Button></Space>
            <Space><Button theme="secondary">Secondary</Button></Space>
            <Space><Button theme="flat">Flat</Button></Space>
            <Space><Button theme="blue">Blue</Button></Space>
        </div>
    )).add('Disabled', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Disabled</h1>
            <Space><Button theme="main" disabled>Main</Button></Space>
            <Space><Button theme="secondary" disabled>Secondary</Button></Space>
            <Space><Button theme="flat" disabled>Flat</Button></Space>
            <Space><Button theme="blue" disabled>Blue</Button></Space>
        </div>
    )).add('Sizes', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Sizes</h1>
            <Space><Button size="sm">Small</Button></Space>
            <Space><Button size="md">Medium</Button></Space>
            <Space><Button size="lg">Big</Button></Space>
        </div>
    )).add('Icons', () => (
        <div>
            <div>
                <h1 style={{fontFamily:'Open Sans'}}>Icons</h1>
                <Space><Button theme="main" icon="plus">Main</Button></Space>
                <Space><Button theme="secondary" icon="plus">Secondary</Button></Space>
                <Space><Button theme="flat" icon="plus">Flat</Button></Space>
                <Space><Button theme="blue" icon="plus">Blue</Button></Space>
            </div>
            <div>
                <Space><Button theme="main" icon="plus" disabled>Main</Button></Space>
                <Space><Button theme="secondary" icon="plus" disabled>Secondary</Button></Space>
                <Space><Button theme="flat" icon="plus" disabled>Flat</Button></Space>
                <Space><Button theme="blue" icon="plus" disabled>Blue</Button></Space>
            </div>
            <div>
                <Space><Button size="sm" icon="plus">Small</Button></Space>
                <Space><Button size="md" icon="plus">Medium</Button></Space>
                <Space><Button size="lg" icon="plus">Big</Button></Space>
            </div>
        </div>
    )).add('Loading', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Loading</h1>
            <Space><Button loading={true}>Loading</Button></Space>
        </div>
    )).add('Playground', (() => {
        theme = select('Theme', themeOptions, 'main');
        size = select('Size', sizeOptions, 'sm');
        disabled = boolean('Disabled', false);
        icon = boolean('Icon', false);
        loading = boolean('Loading', false);
        onClick = boolean('onClick', false);
        href = text('href', '');
        target = select('target', targetOptions);
        return (<div>
            <h1 style={{fontFamily:'Open Sans'}}>Playground</h1>
                <Space><Button
                    theme={theme}
                    size={size}
                    disabled={disabled}
                    icon={icon ? 'plus' : ''}
                    loading={loading}
                    onClick={onClick ? () => {alert('onClick event');} : () => {}}
                    href={href}
                    target={target}>
                  {text('Label', 'Button')}
              </Button></Space>
              <div style={{background:'#ddd', padding:'15px'}}>
                  <pre>
                      <code className="language-js">
                          {`import { Button } from 'r12-common';

<Button${theme ? ` theme="${theme}"` : ''}${size ? ` size="${size}"` : ''}${disabled ? ' disabled' : ''}${icon ? ` icon="plus"` : ''}${loading ? ' loading' : ''}${onClick ? ` onClick="() => {console.log('onClick event')}"` : ''}${href ? ` href="${href}"` : ''}${target ? ` target="${target}"` : ''}>
    ${text('Label', 'Button')}
</Button>`}
                      </code>
                  </pre>
              </div>
        </div>)
    }))
;