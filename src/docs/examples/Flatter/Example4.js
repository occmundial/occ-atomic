/* Flatter tags with src & href */
import React from 'react';
import { Flatter } from '@occmundial/occ-atomic';

const htmlTextExample =
`<img src="smiley.gif" alt="Smiley face" height="42" width="42"><p style="text-align: justify;margin: 0 0 15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Donec sed scelerisque risus, ut efficitur ante.</strong></p>`;;

export default function Example4() {
    return (
        <div>
            <Flatter htmlText={htmlTextExample} />
        </div>
    );
}
