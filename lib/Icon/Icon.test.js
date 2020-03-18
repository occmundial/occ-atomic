import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';

import Icon from './Icon';

let sheets;

describe("Icon", () => {

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Icon iconName="search" />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('calls the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Icon iconName="search" onClick={onClick} />
        );
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

});

describe("Icon styles", () => {

    beforeEach(() => sheets = new SheetsRegistry());
    afterEach(() => sheets = null);

    it('returns the right styles', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Icon iconName="testing" />
            </JssProvider>
        );
        let rules = sheets.registry[0].rules;
        let iconStyles = rules.map['icon-d0'].style;
        expect(iconStyles.width).toBe('5px');
        expect(iconStyles.height).toBe('5px');
        expect(iconStyles.display).toBe('inline-block');
        wrapper.setProps({ children: <Icon iconName="testing" width={20} height={20} display="block" />});
        rules = sheets.registry[0].rules;
        iconStyles = rules.map['icon-d1'].style;
        expect(iconStyles.width).toBe('20px');
        expect(iconStyles.height).toBe('20px');
        expect(iconStyles.display).toBe('block');
    });

    it('returns the icon with a given color', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Icon iconName="testing" />
            </JssProvider>
        );
        let rules = sheets.registry[0].rules;
        let iconStyles = rules.map['icon-d0'].style;
        let iconHoverStyles = rules.map['.icon-0-2-1:hover'].style;
        expect(iconStyles.background).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMwMDA=)');
        expect(iconHoverStyles.background).toBe(undefined);
        wrapper.setProps({ children: <Icon iconName="testing" colors={['#f00']} hover={['#00f']} />});
        rules = sheets.registry[0].rules;
        iconStyles = rules.map['icon-d1'].style;
        iconHoverStyles = rules.map['.icon-d1-0-2-4:hover'].style;
        expect(iconStyles.background).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICNmMDA=)');
        expect(iconHoverStyles.background).toBe('url(data:image/svg+xml;base64,dGVzdGluZyAtICMwMGY=)');
    });

});
