import React from 'react';
import { shallow } from 'enzyme';
import SightLogo from './SightLogo';
import styles from './styles';
import SightLogoJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("SightLogo", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SightLogo classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("SightLogoJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <SightLogoJSS />
        );
        expect(wrapper).toMatchSnapshot();
    });

});