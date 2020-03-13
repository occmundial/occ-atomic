import React from 'react';
import { mount } from 'enzyme';
import { JssProvider, SheetsRegistry } from 'react-jss';
import classnames from 'classnames';

import Col from './Col';

describe("Col", () => {

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Col xs={{ col: 12 }} />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('matches the classes', () => {
        const sheets = new SheetsRegistry();
        const wrapper = mount(
            <JssProvider registry={sheets}>
                <Col xxs={{ col: 6, offset: 3, push: 1, pull: 1 }} />
            </JssProvider>
        );
        const { classes } = sheets.registry[0];
        expect(wrapper.find('div').prop('className')).toEqual(classnames(
            classes.col,
            classes.xxs6,
            classes['offset-xxs3'],
            classes['push-xxs1'],
            classes['pull-xxs1']
        ));
    });

});
