import React from 'react';
import { shallow } from 'enzyme';
import SwitchGroup from './SwitchGroup';
import styles from './styles';
import SwitchGroupJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

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

describe("SwitchGroup", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SwitchGroup buttons={buttons} classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <SwitchGroup buttons={buttons} onClick={onClick} classes={classes} />
        );
        wrapper.find('button').first().simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('changes the state with the selected button', () => {
        const wrapper = shallow(
            <SwitchGroup buttons={buttons} classes={classes} />
        );
        wrapper.setState({selected:0});
        expect(wrapper.state('selected')).toBe(0);
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.state('selected')).toBe(1);
    });

    it('sets a default button as active', () => {
        const wrapper = shallow(
            <SwitchGroup buttons={buttons} classes={classes} />
        );
        wrapper.setState({selected:1});
        expect(wrapper.find('button').at(1).prop('className')).toEqual('button active');
        expect(wrapper.find('button').at(0).prop('className')).toEqual('button');
    });

    it('shows the button text and secondary text', () => {
        const wrapper = shallow(
            <SwitchGroup buttons={buttons} classes={classes} />
        );
        expect(wrapper.find('button').at(0).text()).toEqual('Option 1(10)');
        expect(wrapper.find('button').at(1).text()).toEqual('Option 2(5)');
    });
});

describe("SwitchGroupJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SwitchGroupJSS buttons={buttons} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("SwitchGroup styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});