/* Flatter unallowed tags */
import React from 'react';
import { Flatter } from '@occmundial/occ-atomic';

const htmlTextExample =
`<!--comment--><table><tr><td><code>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </code></td></tr></table><strong><a href="https://www.occ.com.mx/">Donec sed scelerisque risus, ut efficitur ante.</a></strong>`;

export default function Example5() {
    return (
        <div>
            <Flatter htmlText={htmlTextExample} />
        </div>
    );
}
