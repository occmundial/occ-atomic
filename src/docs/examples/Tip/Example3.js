/* Tip small size on window width < 576px */
import React from 'react';
import PropTypes from 'prop-types';
import { Tip, WindowSize, grid } from '@occmundial/occ-atomic';

function Example3({ winWidth }) {
    return (
        <Tip
            icon
            theme="info"
            size={winWidth < grid.xs ? 'small' : 'large'}
            onClose={() => true}
            cta={{
                text: 'Click here.',
                onClick: () => alert('CTA clicked!')
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat
        </Tip>
    );
}

Example3.propTypes = {
    winWidth: PropTypes.number
};

export default WindowSize(Example3);
