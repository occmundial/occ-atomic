import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/react';
import { Flexbox } from '../../lib/index';

const stories = storiesOf('Flexbox', module);
stories.addDecorator(withKnobs);

const displayOptions = {
    '': '',
    flex: 'Flex',
    'inline-flex': 'Inline flex'
};

const directionOptions = {
    '': '',
    row: 'Row',
    rowR: 'Row reverse',
    col: 'Column',
    colR: 'Column reverse'
};

const wrapOptions = {
    '': '',
    wrap: 'Wrap',
    noWrap: 'No wrap',
    wrapR: 'Wrap reverse'
};

const justifyContentOptions = {
    '': '',
    start: 'Flex start',
    end: 'Flex end',
    center: 'Center',
    between: 'Space between',
    around: 'Space around',
    evenly: 'Space evenly'
};

const alignItemsOptions = {
    '': '',
    start: 'Flex start',
    end: 'Flex end',
    center: 'Center',
    stretch: 'Stretch',
    base: 'Baseline'
};

const alignContentOptions = {
    '': '',
    start: 'Flex start',
    end: 'Flex end',
    center: 'Center',
    between: 'Space between',
    around: 'Space around'
};
const alignSelfOptions = {
    '': '',
    auto: 'Auto',
    start: 'Flex start',
    end: 'Flex end',
    center: 'Center',
    between: 'Space between',
    around: 'Space around'
};

stories.add('Direction', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Direction</h1>
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Row</span>
            <Flexbox display="flex" direction="row" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Row reverse</span>
            <Flexbox display="flex" direction="rowR" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Column</span>
            <Flexbox display="flex" direction="col" style={{background:'#efefef', fontFamily:'Open Sans', width:100, height:200}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Column reverse</span>
            <Flexbox display="flex" direction="colR" style={{background:'#efefef', fontFamily:'Open Sans', width:100, height:200}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox>
        </div>
    )).add('Wrap', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Wrap</h1>
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Wrap</span>
            <Flexbox display="flex" wrap="wrap" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100, resize:'both', overflow:'auto'}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>No wrap</span>
            <Flexbox display="flex" wrap="noWarp" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100, resize:'both', overflow:'auto'}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Wrap reverse</span>
            <Flexbox display="flex" wrap="wrapR" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100, resize:'both', overflow:'auto'}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox>
        </div>
    )).add('Justify content', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Justify content</h1>
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Flex start</span>
            <Flexbox display="flex" justifyContent="start" style={{background:'#efefef', fontFamily:'Open Sans', width:200}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Flex end</span>
            <Flexbox display="flex" justifyContent="end" style={{background:'#efefef', fontFamily:'Open Sans', width:200}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Center</span>
            <Flexbox display="flex" justifyContent="center" style={{background:'#efefef', fontFamily:'Open Sans', width:200}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Space between</span>
            <Flexbox display="flex" justifyContent="between" style={{background:'#efefef', fontFamily:'Open Sans', width:200}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Space around</span>
            <Flexbox display="flex" justifyContent="around" style={{background:'#efefef', fontFamily:'Open Sans', width:200}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Space evenly</span>
            <Flexbox display="flex" justifyContent="evenly" style={{background:'#efefef', fontFamily:'Open Sans', width:200}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox>
        </div>
    )).add('Align items', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Align items</h1>
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Flex start</span>
            <Flexbox display="flex" alignItems="start" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Flex end</span>
            <Flexbox display="flex" alignItems="end" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Center</span>
            <Flexbox display="flex" alignItems="center" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Stretch</span>
            <Flexbox display="flex" alignItems="stretch" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Baseline</span>
            <Flexbox display="flex" alignItems="base" style={{background:'#efefef', fontFamily:'Open Sans', width:200, height:100}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'13px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'30px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'15px'}}>3</Flexbox>
            </Flexbox>
        </div>
    )).add('Align content', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Align content</h1>
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Flex start</span>
            <Flexbox display="flex" wrap="wrap" alignContent="start" style={{background:'#efefef', fontFamily:'Open Sans', width:125, height:125, resize:'both', overflow:'auto'}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Flex end</span>
            <Flexbox display="flex" wrap="wrap" alignContent="end" style={{background:'#efefef', fontFamily:'Open Sans', width:125, height:125, resize:'both', overflow:'auto'}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Center</span>
            <Flexbox display="flex" wrap="wrap" alignContent="center" style={{background:'#efefef', fontFamily:'Open Sans', width:125, height:125, resize:'both', overflow:'auto'}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Space between</span>
            <Flexbox display="flex" wrap="wrap" alignContent="between" style={{background:'#efefef', fontFamily:'Open Sans', width:125, height:125, resize:'both', overflow:'auto'}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
            </Flexbox><br />
            <span style={{fontFamily:'Open Sans', display:'inline-block'}}>Space around</span>
            <Flexbox display="flex" wrap="wrap" alignContent="around" style={{background:'#efefef', fontFamily:'Open Sans', width:125, height:125, resize:'both', overflow:'auto'}}>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#508898', width:50, minHeight:50, color:'#fff', fontSize:'13px'}}>1</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#819fae', width:50, minHeight:50, color:'#fff', fontSize:'30px'}}>2</Flexbox>
                <Flexbox display="inline-flex" justifyContent="center" alignItems="center" style={{background:'#BBDAE3', width:50, minHeight:50, color:'#fff', fontSize:'15px'}}>3</Flexbox>
            </Flexbox>
        </div>
    )).add('Playground', () => {
        const display = select('Display', displayOptions);
        const direction = select('Direction', directionOptions);
        const wrap = select('Wrap', wrapOptions);
        const justifyContent = select('Justify content', justifyContentOptions);
        const alignItems = select('Align items', alignItemsOptions);
        const alignContent = select('Align content', alignContentOptions);
        const box1Order = number('Box 1 order');
        const box1Flex = text('Box 1 flex', '1 0 100px');
        const box1Self = select('Box 1 alignSelf', alignSelfOptions);
        const box2Order = number('Box 2 order');
        const box2Flex = text('Box 2 flex', '1 0 100px');
        const box2Self = select('Box 2 alignSelf', alignSelfOptions);
        const box3Order = number('Box 3 order');
        const box3Flex = text('Box 3 flex', '1 0 100px');
        const box3Self = select('Box 3 alignSelf', alignSelfOptions);
        return (
            <div>
                <h1 style={{fontFamily:'Open Sans'}}>Playground</h1>
                <Flexbox display={display} direction={direction} wrap={wrap} justifyContent={justifyContent} alignItems={alignItems} alignContent={alignContent} style={{background:'#efefef', fontFamily:'Open Sans', height:200, resize:'both', overflow:'auto'}}>
                    <Flexbox display="inline-flex" justifyContent="center" alignItems="center" order={box1Order} flex={box1Flex} alignSelf={box1Self} style={{background:'#508898', width:50, height:50, color:'#fff', fontSize:'20px'}}>1</Flexbox>
                    <Flexbox display="inline-flex" justifyContent="center" alignItems="center" order={box2Order} flex={box2Flex} alignSelf={box2Self} style={{background:'#819fae', width:50, height:50, color:'#fff', fontSize:'20px'}}>2</Flexbox>
                    <Flexbox display="inline-flex" justifyContent="center" alignItems="center" order={box3Order} flex={box3Flex} alignSelf={box3Self} style={{background:'#BBDAE3', width:50, height:50, color:'#fff', fontSize:'20px'}}>3</Flexbox>
                </Flexbox>
                <pre style={{background:'#ddd', padding:'15px', overflowX:'auto'}}>
                    <code>
                        {`import { Flexbox } from 'r12-common';
  
  <Flexbox${display ? ` display="${display}"` : ''}${direction ? ` direction="${direction}"` : ''}${wrap ? ` wrap="${wrap}"` : ''}${justifyContent ? ` justifyContent="${justifyContent}"` : ''}${alignItems ? ` alignItems="${alignItems}"` : ''}${alignContent ? ` alignContent="${alignContent}"` : ''}>
      <Flexbox>1</Flexbox>
      <Flexbox>2</Flexbox>
      <Flexbox>3</Flexbox>
  </Flexbox>`}
                    </code>
                </pre>
            </div>
        )
    })