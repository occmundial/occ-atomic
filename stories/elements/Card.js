import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs/react';
import { Card, Container } from '../../lib/index';

const stories = storiesOf('Card', module).addDecorator(story => (
    <div style={{background:'#f7f7f7', padding:'20px', fontFamily:'Open Sans'}}>
        {story()}
    </div>
));
stories.addDecorator(withKnobs);

stories.add('Default', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Default</h1>
            <Container>
                <Card>Card content</Card>
            </Container>
        </div>
    )).add('No padding', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>No padding</h1>
            <Container>
                <Card noPadding>Card content</Card>
            </Container>
        </div>
    )).add('Playground', (() => {
        const shadow = number('Shadow', 0, {range: true, min:0, max:7, step:1});
        const padding = boolean('No padding', true);
        return (<div>
            <h1 style={{fontFamily:'Open Sans'}}>Playground</h1>
                <Container>
                    <Card
                        shadow={shadow}
                        noPadding={padding}>
                      Card content
                  </Card>
              </Container>
              <pre style={{background:'#ddd', padding:'15px', overflowX:'auto'}}>
                  <code>
                      {`import { Card } from 'r12-common';

<Card${shadow ? ` shadow="${shadow}"` : ''}${padding ? ' noPadding' : ''}>
    Card content
</card>`}
                  </code>
              </pre>
        </div>)
    }))
;