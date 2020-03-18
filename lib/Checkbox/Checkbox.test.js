import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';
import classnames from 'classnames';
import Checkbox from './Checkbox';

let sheets, classes;

describe('Checkbox', () => {

    beforeEach(() => sheets = new SheetsRegistry);
    afterEach(() => sheets = null);

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Checkbox />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('has the right state', () => {
        let wrapper = mount(
            <JssProvider registry={sheets}>
                <Checkbox />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find('div').first().prop('className')).toEqual(classes.cont);
        wrapper = mount(
            <JssProvider registry={sheets}>
                <Checkbox value />
            </JssProvider>
        );
        expect(wrapper.find('div').first().prop('className')).toEqual(classnames(classes.cont, classes.active));
    });

    it('appears undetermined', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Checkbox undetermined />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find('div').first().prop('className')).toEqual(classnames(classes.cont, classes.undetermined));
    });

    it('is disabled', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Checkbox disabled />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find('div').first().prop('className')).toEqual(classnames(classes.cont, classes.disabled));
    });

    it('calls onChange function', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <Checkbox onChange={onChange} />
        );
        wrapper.simulate('click');
        expect(onChange.mock.calls.length).toBe(1);
    });

    it('shows the label', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Checkbox label="Label content" right="Right" />
            </JssProvider>
        );
        classes = sheets.registry[1].classes;
        expect(wrapper.find(`.${classes.label}`).first().text()).toEqual('Label content');
    });

});
