import React from 'react';
import { shallow } from 'enzyme';
import TourTip from './TourTip';
import styles from './styles';
import TourTipJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("TourTip", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <TourTip classes={classes} direction="down" target="target" />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("TourTipJSS", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <TourTipJSS direction="down" target="target" />
        );
        expect(wrapper).toMatchSnapshot();
    });

});

describe("TourTip styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});