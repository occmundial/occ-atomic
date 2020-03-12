import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';

import Flexbox from './Flexbox';

describe('Flexbox', () => {

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Flexbox display="flex" />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('matches the classes', () => {
        const sheets = new SheetsRegistry();
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Flexbox display="flex" direction="col" justifyContent="center" alignItems="start" alignContent="end" />
            </JssProvider>
        );
        const { classes } = sheets.registry[0];
        expect(wrapper.find('div').prop('className')).toEqual(`${classes.flex} ${classes.col} ${classes.jcenter} ${classes.astart} ${classes.cend}`);
    });

});
