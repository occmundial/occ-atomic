import React from 'react';
import { shallow } from 'enzyme';
import Hidden from './Hidden';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Hidden", () => {

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Hidden xs><div>Text</div></Hidden>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('hides content in xs', () => {
        const wrapper = shallow(
            <Hidden xs><div>Text</div></Hidden>
        );
        wrapper.setState({width:1200});
        expect(wrapper.find('div').text()).toEqual('Text');
        wrapper.setState({width:500});
        expect(wrapper.find('div').length).toBe(0);
    });
    
    it('hides content in xs using just css', () => {
        const wrapper = shallow(
            <Hidden xs mediaQuery classes={classes}><div>Text</div></Hidden>
        );
        wrapper.setState({width:1200});
        const className = wrapper.find('span').prop('className');
        expect(JSON.stringify(styles[className.trim()])).toBe('{"@media screen and (max-width:767px)":{"display":"none"}}');
        expect(wrapper.find('div').text()).toEqual('Text');
        wrapper.setState({width:500});
        expect(wrapper.find('div').text()).toEqual('Text');
    });

});