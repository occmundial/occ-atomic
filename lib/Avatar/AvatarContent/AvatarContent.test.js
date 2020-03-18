import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';

import AvatarContent from './AvatarContent';

let sheets;

describe('AvatarContent', () => {

    beforeEach(() => sheets = new SheetsRegistry());
    afterEach(() => sheets = null);

    it('matches the snapshot', () => {
        const wrapper = mount(
            <AvatarContent name="John Doe" />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('returns the first two capital letters of the name', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <AvatarContent name="John Doe" />
            </JssProvider>
        );
        const { classes } = sheets.registry[0];
        expect(wrapper.find(`.${classes.capital} span`).text()).toEqual('JD');
    });

    it('shows the right gender icon', () => {
        let wrapper = mount(
            <JssProvider registry={sheets}>
                <AvatarContent gender="m" />
            </JssProvider>
        );
        let classes = sheets.registry[0].classes;
        expect(wrapper.find(`.${classes.m}`).length).toBe(1);
        expect(wrapper.find(`.${classes.f}`).length).toBe(0);
        wrapper = mount(
            <JssProvider registry={sheets}>
                <AvatarContent gender="f" />
            </JssProvider>
        );
        classes = sheets.registry[0].classes;
        expect(wrapper.find(`.${classes.m}`).length).toBe(0);
        expect(wrapper.find(`.${classes.f}`).length).toBe(1);
    });

    it('renders the photo as a background', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <AvatarContent photo="http://placehold.it/70x70" />
            </JssProvider>
        );
        const { classes } = sheets.registry[0];
        expect(wrapper.find(`.${classes.cont}`).prop('style')).toHaveProperty('background', "url('http://placehold.it/70x70') no-repeat center center / cover");
    });

    it('changes the font size', () => {
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <AvatarContent name="John Doe" size={50} />
            </JssProvider>
        );
        const { classes } = sheets.registry[0];
        const styles = wrapper.find(`.${classes.capital}`).prop('style');
        expect(styles).toHaveProperty('fontSize', '20px');
        expect(styles).toHaveProperty('lineHeight', '50px');
    });

});
