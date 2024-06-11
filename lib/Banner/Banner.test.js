import React from 'react';
import { shallow, mount } from 'enzyme';
import Banner from './Banner';
import BannerJSS from './index';

describe("Banner", () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Banner 
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="info"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
            </Banner>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('Has content centered', () => {
        const wrapper = shallow(
            <Banner 
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="info"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
            </Banner>
        );
        expect(wrapper.prop('banner')).toEqual(true);
    });

    it('has a close icon button', () => {
        const wrapper = mount(
            <Banner 
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="info"
                testId="banner-test"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
            </Banner>
        );
        expect(wrapper.find({ "data-testid": 'banner-test__close-icon'}).length).toBe(1);
    });

    it('has a link', () => {
        const wrapper = mount(
            <Banner 
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="info"
                testId="banner-test"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
            </Banner>
        );
        expect(wrapper.find({ "data-testid": 'banner-test__link'}).length).toBe(1);
    });
});

describe("BannerJSS", () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(
            <BannerJSS 
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="info"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
            </BannerJSS>
        );
        expect(wrapper).toMatchSnapshot();
    });

});

