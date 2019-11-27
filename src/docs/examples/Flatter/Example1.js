/* Flatter with clean html and all allowed tags */
import React from 'react';
import { Flatter } from '@occmundial/occ-atomic';

const htmlTextExample =
`<h4>H4 tag text</h4>
<p>P tag text</p>
<p><strong>STRONG tag text</strong></p>
<p><em>EM tag text</em></p>
<p><strong><em>EM tag inside a strong tag text</em></strong></p>
<ul>
<li>LI tag # 1</li>
<li>LI tag # 2</li>
<li>LI tag # 3 <strong><em>EM tag inside a strong tag text</em></strong></li>
<li>LI tag # 4 <em>EM tag text</em> <strong>STRONG tag text</strong></li>
<li>LI tag # 5 <p>Text inside p</p></li>
<li>LI tag # 6 <p>Text before BR<br> Text after BR</p> inside LI</li>
<li>
<ul>
<li>LI tag # 8 hierarchy 2 inside another li tag</li>
</ul>
</li>
</ul>
<p>Text before BR<br>Text after BR</p>`;

export default function Example1() {
    return (
        <div>
            <Flatter htmlText={htmlTextExample} />
        </div>
    );
}
