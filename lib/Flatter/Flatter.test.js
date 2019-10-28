import React from 'react';
import { shallow, mount } from 'enzyme';
import Tip from './Tip';
import styles from './styles';
import TipJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Flatter", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Tip classes={classes} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});
