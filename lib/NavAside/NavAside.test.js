import React from 'react';
import { shallow, mount } from 'enzyme';
import NavAside from './NavAside';
import styles from './styles';
import NavAsidePortal from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("NavAside", () => {

    it('matches the snapshot', () => {
        const onClose = jest.fn();
        const wrapper = shallow(
            <NavAside classes={classes} onClose={onClose} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('calls the onClose function when clicking the overlay', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <NavAside classes={classes} onClose={onClose} />
        );
        wrapper.find('.overlay').simulate('click');
        expect(onClose.mock.calls.length).toBe(1);
    });

    it('toggles between show and hide', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <NavAside classes={classes} onClose={onClose} show={true} />
        );
        expect(wrapper.find('.overlayShow').length).toBe(1);
        wrapper.setProps({ show: false });
        expect(wrapper.find('.overlayShow').length).toBe(0);
    });

    it('renders the content', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <NavAside classes={classes} onClose={onClose}>
                Content
            </NavAside>
        );
        expect(wrapper.find('.content').at(0).text()).toBe('Content');
    });

    it('renders the top', () => {
      const onClose = jest.fn();
      const wrapper = mount(
          <NavAside classes={classes} onClose={onClose} top={'Content'} />
      );
      expect(wrapper.find('.top').at(0).text()).toBe('Content');
  });


});

describe("ModalPortal", () => {

    it('matches the snapshot', () => {
        const navAsideRoot = global.document.createElement('div');
        const wrapper = shallow(
            <NavAsidePortal container={navAsideRoot} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('mounts and unmounts the component', () => {
        const onClose = jest.fn();
        const navAsideRoot = global.document.createElement('div');
        navAsideRoot.setAttribute('id', 'navAside-root');
        const body = global.document.querySelector('body');
        body.appendChild(navAsideRoot);
        const wrapper = mount(
            <NavAsidePortal container={navAsideRoot} onClose={onClose} />
        );
        expect(navAsideRoot.hasChildNodes()).toBeFalsy();
        wrapper.setProps({ show: true });
        expect(navAsideRoot.hasChildNodes()).toBeTruthy();
        wrapper.setProps({ show: false });
        wrapper.setState({ mount: false });
        expect(navAsideRoot.hasChildNodes()).toBeFalsy();
    });

});

describe("NavAside styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});