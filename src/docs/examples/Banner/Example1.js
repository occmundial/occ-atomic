/* Themes of Tip */
import React from 'react';
import PropTypes from 'prop-types';
import { Banner, Flexbox, WindowSize, grid } from '@occmundial/occ-atomic';

function Example1({ winWidth }) {
    return (
        <Flexbox display="flex" direction="col" style={{ gap: 8 }}>
            <Banner
                onClose={() => {}}
                size={winWidth < grid.xs ? 'small' : 'large'}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="info"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
            <Banner
                onClose={() => {}}
                size={winWidth < grid.xs ? 'small' : 'large'}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="warning"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
            <Banner
                onClose={() => {}}
                size={winWidth < grid.xs ? 'small' : 'large'}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="success"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
            <Banner
                onClose={() => {}}
                size={winWidth < grid.xs ? 'small' : 'large'}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="error"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
            <Banner
                onClose={() => {}}
                size={winWidth < grid.xs ? 'small' : 'large'}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="promote"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
        </Flexbox>
    );
}

Example1.propTypes = {
    winWidth: PropTypes.number
};

export default WindowSize(Example1);
