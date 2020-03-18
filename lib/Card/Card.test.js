import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';
import classnames from 'classnames';
import Card from './Card';

let sheets, classes;

describe("Card", () => {

    beforeEach(() => sheets = new SheetsRegistry());
    afterEach(() => sheets = null);

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Card />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('has no padding', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Card noPadding />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find('div').prop('className').indexOf(classes.cardNoPadding)).not.toBe(-1);
    });

    it('has the right level of shadow', () => {
        let wrapper = mount(
            <JssProvider registry={sheets}>
                <Card />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find('div').prop('className')).toEqual(classnames(classes.card, classes.flat));
        wrapper = mount(
            <JssProvider registry={sheets}>
                <Card rest />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find('div').prop('className')).toEqual(classnames(classes.card, classes.rest));
        wrapper = mount(
            <JssProvider registry={sheets}>
                <Card raised />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find('div').prop('className')).toEqual(classnames(classes.card, classes.raised));
    });

});
