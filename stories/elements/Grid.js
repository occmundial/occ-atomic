import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs/react';
import { Container, Row, Column, Visible, Hidden } from '../../lib/index';

const stories = storiesOf('Grid', module);
stories.addDecorator(withKnobs);

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};

stories.add('Container, Row & Column', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Container, Row & Column</h1>
            <Container styles={{fontFamily:'Open Sans', background:'#f7f7f7'}}>
                Container
                <Row styles={{background:'#e7e7e7'}}>
                    Row
                </Row>
                <Row>
                    <Column xs={{col:6}} styles={{background:'#d7d7d7'}}>
                        Column
                        <div style={{background:'#b7b7b7'}}>
                            Column content
                        </div>
                    </Column>
                    <Column xs={{col:6}} styles={{background:'#d7d7d7'}}>
                        Column
                        <div style={{background:'#b7b7b7'}}>
                            Column content
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Breakpoints', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Breakpoints</h1>
            <Container styles={{fontFamily:'Open Sans', background:'#f7f7f7'}}>
                <Row>
                    <Column xs={{col:12}} sm={{col:8}} md={{col:6}} lg={{col:4}}>
                        <div style={{background:'#b7b7b7'}}>
                            <Visible xs>
                                XS: 12 columns
                            </Visible>
                            <Visible sm>
                                SM: 8 columns
                            </Visible>
                            <Visible md>
                                MD: 6 columns
                            </Visible>
                            <Visible lg>
                                LG: 4 columns
                            </Visible>
                        </div>
                    </Column>
                    <Column xs={{col:12}} sm={{col:4}} md={{col:3}} lg={{col:4}}>
                        <div style={{background:'#b7b7b7'}}>
                            <Visible xs>
                                XS: 12 columns
                            </Visible>
                            <Visible sm>
                                SM: 4 columns
                            </Visible>
                            <Visible md>
                                MD: 3 columns
                            </Visible>
                            <Visible lg>
                                LG: 4 columns
                            </Visible>
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Hidden & Visible', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Hidden & Visible</h1>
            <Container styles={{fontFamily:'Open Sans', background:'#f7f7f7'}}>
                <Row>
                    <Column xs={{col:12}} styles={{background:'#d7d7d7'}}>
                        <div style={{background:'#b7b7b7'}}>
                            Always visible
                        </div>
                    </Column>
                    <Hidden xs>
                        <Column xs={{col:12}} styles={{background:'#d7d7d7'}}>
                            <div style={{background:'#b7b7b7'}}>
                                Hidden in XS
                            </div>
                        </Column>
                    </Hidden>
                    <Visible md>
                        <Column xs={{col:12}} styles={{background:'#d7d7d7'}}>
                            <div style={{background:'#b7b7b7'}}>
                                Visible in MD
                            </div>
                        </Column>
                    </Visible>
                </Row>
            </Container>
        </div>
    )).add('Offset, Push & Pull', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Offset, Push & Pull</h1>
            <Container styles={{fontFamily:'Open Sans', background:'#f7f7f7'}}>
                <Row>
                    <Column xs={{col:6, offset:4}} styles={{background:'#d7d7d7'}}>
                        <div style={{background:'#b7b7b7'}}>
                            Offset 4 columns
                        </div>
                    </Column>
                </Row><br />
                <Row>
                    <Column xs={{col:3}} styles={{background:'#d7d7d7'}}>
                        <div style={{background:'#b7b7b7'}}>
                            3 columns
                        </div>
                    </Column>
                    <Column xs={{col:6, push:3}} styles={{background:'#d7d7d7'}}>
                        <div style={{background:'#b7b7b7'}}>
                            Push 3 columns
                        </div>
                    </Column>
                </Row><br />
                <Row>
                    <Column xs={{col:3}} styles={{background:'#d7d7d7'}}>
                        <div style={{background:'#b7b7b7'}}>
                            3 columns
                        </div>
                    </Column>
                    <Column xs={{col:6, pull:1}} styles={{background:'#d7d7d7'}}>
                        <div style={{background:'#b7b7b7'}}>
                            Pull 1 column
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Playground', (() => {
        const range = {
            min:1,
            max:12
        }
        const range2 = {
            min:0,
            max:12
        }
        const useVisible = boolean('Use <Visible>', false);
        const visible = select('Visible in', sizeOptions);
        const useHidden = boolean('Use <Hidden>', false);
        const hidden = select('Hidden in', sizeOptions);
        const xsCol = number('xs columns', 4, range);
        const xsOff = number('xs offset', 0, range2);
        const xsPush = number('xs push', 0, range2);
        const xsPull = number('xs pull', 0, range2);
        const smCol = number('sm columns', 4, range);
        const smOff = number('sm offset', 0, range2);
        const smPush = number('sm push', 0, range2);
        const smPull = number('sm pull', 0, range2);
        const mdCol = number('md columns', 4, range);
        const mdOff = number('md offset', 0, range2);
        const mdPush = number('md push', 0, range2);
        const mdPull = number('md pull', 0, range2);
        const lgCol = number('lg columns', 4, range);
        const lgOff = number('lg offset', 0, range2);
        const lgPush = number('lg push', 0, range2);
        const lgPull = number('lg pull', 0, range2);
        const Wrapper = useVisible ? Visible : useHidden ? Hidden : 'div';
        return (<div>
            <h1 style={{fontFamily:'Open Sans'}}>Playground</h1>
                <Container styles={{fontFamily:'Open Sans', background:'#f7f7f7'}}>
                    <Row>
                        <Wrapper
                            xs={((useVisible && visible=='xs') || (useHidden && hidden=='xs')) ? true : undefined}
                            sm={((useVisible && visible=='sm') || (useHidden && hidden=='sm')) ? true : undefined}
                            md={((useVisible && visible=='md') || (useHidden && hidden=='md')) ? true : undefined}
                            lg={((useVisible && visible=='lg') || (useHidden && hidden=='lg')) ? true : undefined}
                            >
                            <Column
                                xs={{col: xsCol, offset: xsOff, push: xsPush, pull: xsPull}}
                                sm={{col: smCol, offset: smOff, push: smPush, pull: smPull}}
                                md={{col: mdCol, offset: mdOff, push: mdPush, pull: mdPull}}
                                lg={{col: lgCol, offset: lgOff, push: lgPush, pull: lgPull}}
                                styles={{background:'#d7d7d7'}}>
                                Column 1
                            </Column>
                        </Wrapper>
                    </Row>
                </Container>
                <pre style={{background:'#ddd', padding:'15px', overflowX:'auto'}}>
                    <code>
                        {/* {`import { Card } from 'r12-common';

<Card${shadow ? ` shadow="${shadow}"` : ''}${padding ? ' noPadding' : ''}>
    Card content
</card>`} */}
                    </code>
                </pre>
        </div>)
    }))
;