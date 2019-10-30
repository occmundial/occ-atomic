/* Flatter tags with inline style */
import React from 'react';
import { Flatter } from '@occmundial/occ-atomic';

const htmlTextExample = `<p style="text-align: justify;margin: 0 0 15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Donec sed scelerisque risus, ut efficitur ante.</strong></p>`;;

export default function Example3() {
    return (
        <div>
            <Flatter htmlText={htmlTextExample} />
        </div>
    );
}
