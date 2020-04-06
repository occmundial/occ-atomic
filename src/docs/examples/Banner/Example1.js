/* Themes of Tip */
import React, { Fragment } from 'react';
import { Banner, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Banner >
                <Fragment>      
                    ¿Necesitas ayuda? Contamos con Atención al Cliente las 24 horas del día.
                    <a style={{ color: colors.bgWhite, textDecoration: 'underline', marginLeft: '8px', cursor: 'pointer' }}>
                        Saber más
                    </a>
                </Fragment>
            </Banner>
        </div>
    );
}
