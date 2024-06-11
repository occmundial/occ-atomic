import React from 'react';
import { shallow } from 'enzyme';
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

