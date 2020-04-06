/* Themes of Tip */
import React, { Fragment } from 'react';
import { Banner, colors, spacing } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Banner >
                <Fragment>      
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
                    <a href="#Banner" 
                        onClick={() => {}} 
                        style={{ color: colors.bgWhite, textDecoration: 'underline', marginLeft: spacing.tiny, cursor: 'pointer' }}
                    >
                        Lorem ipsum
                    </a>
                </Fragment>
            </Banner>
        </div>
    );
}
