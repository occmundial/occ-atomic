import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from './Modal';
import styles from './styles';
import ModalPortal from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const classes = Object.keys(styles).reduce(reduceClasses, {});

describe("Modal", () => {

    it('matches the snapshot', () => {
        const onClose = jest.fn();
        const wrapper = shallow(
            <Modal classes={classes} onClose={onClose} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('calls the onClose function when clicking the overlay', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <Modal classes={classes} onClose={onClose} />
        );
        wrapper.find('.overlay').simulate('click');
        expect(onClose.mock.calls.length).toBe(1);
    });

    it('calls the onClose function when clicking the close icon', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <Modal classes={classes} onClose={onClose} testId="modal-test" />
        );
        wrapper.find({ "data-testid": 'modal-test__close-icon'}).simulate('click');
        expect(onClose.mock.calls.length).toBe(1);
    });

    it('calls the onClose function when pressing the Esc key', () => {
        const onClose = jest.fn();
        const map = {};
        window.addEventListener = jest.fn((event, cb) => {
            map[event] = cb;
        });
        mount(
            <Modal classes={classes} onClose={onClose} />
        );
        map.keydown({ which: 27 });
        expect(onClose.mock.calls.length).toBe(1);
    });

    it('toggles between show and hide', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <Modal classes={classes} onClose={onClose} show={true} />
        );
        expect(wrapper.find('.show').length).toBe(1);
        wrapper.setProps({ show: false });
        expect(wrapper.find('.hide').length).toBe(1);
    });

    it('renders the title', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <Modal classes={classes} onClose={onClose} title="Modal title" />
        );
        expect(wrapper.find('.title').at(0).text()).toBe('Modal title');
    });

    it('renders the content', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <Modal classes={classes} onClose={onClose}>
                Content
            </Modal>
        );
        expect(wrapper.find('.content').at(0).text()).toBe('Content');
    });

    it('renders functional main and secondary buttons', () => {
        const onClose = jest.fn();
        const wrapper = mount(
            <Modal
                classes={classes}
                onClose={onClose}
                mainBtn={{
                    text:'Main button',
                    onClick: onClose
                }}
                secBtn={{
                    text:'Secondary button',
                    onClick: onClose
                }}
                testId="modal"
            />
        );
        const mainBtn = wrapper.find({ 'data-testid': 'modal__button-main' }).at(0);
        const secBtn = wrapper.find({ 'data-testid': 'modal__button-secondary' }).at(0);
        mainBtn.simulate('click');
        secBtn.simulate('click');
        expect(mainBtn.text()).toBe('Main button');
        expect(secBtn.text()).toBe('Secondary button');
        expect(onClose.mock.calls.length).toBe(2);
    });

});

describe("ModalPortal", () => {

    it('matches the snapshot', () => {
        const modalRoot = global.document.createElement('div');
        const wrapper = shallow(
            <ModalPortal container={modalRoot} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('mounts and unmounts the component', () => {
        const onClose = jest.fn();
        const modalRoot = global.document.createElement('div');
        modalRoot.setAttribute('id', 'modal-root');
        const body = global.document.querySelector('body');
        body.appendChild(modalRoot);
        const wrapper = mount(
            <ModalPortal container={modalRoot} onClose={onClose} />
        );
        expect(modalRoot.hasChildNodes()).toBeFalsy();
        wrapper.setProps({ show: true });
        expect(modalRoot.hasChildNodes()).toBeTruthy();
        wrapper.setProps({ show: false });
        wrapper.setState({ mount: false });
        expect(modalRoot.hasChildNodes()).toBeFalsy();
    });

});

describe("Modal styles", () => {

    it('matches the snapshot', () => {
        expect(styles).toMatchSnapshot();
    });

});
