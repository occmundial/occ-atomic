import React from 'react';
import { shallow } from 'enzyme';
import SwitchGroup from './SwitchGroup';
import styles from './styles';
import SwitchGroupJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("SwitchGroup", () => {

    it('matches the snapshot', () => {
        const buttons = [
            {
                text: 'Option 1',
                sec: '(10)'
            },
            {
                text: 'Option 2',
                sec: '(5)'
            }
        ];
        const wrapper = shallow(
            <SwitchGroup buttons={buttons} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("SwitchGroupJSS", () => {

    it('matches the snapshot', () => {
        const buttons = [
            {
                text: 'Option 1',
                sec: '(10)'
            },
            {
                text: 'Option 2',
                sec: '(5)'
            }
        ];
        const wrapper = shallow(
            <SwitchGroupJSS buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});