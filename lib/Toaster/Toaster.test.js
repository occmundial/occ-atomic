import React from 'react';
import { mount } from 'enzyme';
import Toaster from './Toaster';
import { toaster } from './functions';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Toaster", () => {

    it('matches the snapshot', () => {
        const wrapper = mount(
            <Toaster classes={classes} />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('launches a toast', () => {
        const wrapper = mount(
            <Toaster classes={classes} />
        );
        toaster.success({
            title: 'Title'
        });
        wrapper.update();
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.find('p').text()).toBe('Title');
    });

    it('removes a toast', () => {
        const wrapper = mount(
            <Toaster classes={classes} />
        );
        toaster.success({
            title: 'Title'
        });
        wrapper.update();
        expect(wrapper.find('p').text()).toBe('Title');
        toaster.close();
        setTimeout(() => {
            wrapper.update();
            expect(wrapper.find('p').length).toBe(0);
        }, 500);
    });

    it('replaces the current toast', () => {
        const wrapper = mount(
            <Toaster classes={classes} />
        );
        toaster.success({
            title: 'Title'
        });
        wrapper.update();
        expect(wrapper.find('p').text()).toBe('Title');
        toaster.success({
            title: 'New title'
        });
        wrapper.update();
        expect(wrapper.find('p').text()).toBe('New title');
    });

    it('removes a toast after the timer finishes', () => {
        const wrapper = mount(
            <Toaster classes={classes} />
        );
        toaster.success({
            title: 'Title'
        });
        wrapper.update();
        expect(wrapper.find('p').text()).toBe('Title');
        setTimeout(() => {
            wrapper.update();
            expect(wrapper.find('p').length).toBe(0);
        }, 5000);
    });

    it('calls the onClick function', () => {
        const wrapper = mount(
            <Toaster classes={classes} />
        );
        const action = {
            label: 'Action',
            onClick: jest.fn()
        };
        toaster.success({
            title: 'Title',
            action,
            testId: "toaster-test"
        });
        wrapper.update();
        wrapper.find({ "data-testid": 'toaster-test__link'}).simulate('click');
        expect(action.onClick).toHaveBeenCalled();
        setTimeout(() => {
            wrapper.update();
            expect(wrapper.find('p').length).toBe(0);
        }, 0);
    });

});
