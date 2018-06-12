/* TourTip */
import React from 'react';
import { TourTip } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div style={{position:'relative'}}>
            <div id="target" style={{width:100, height:100, background:'#f7f7f7', display:'flex', textAlign:'center', alignItems:'center'}}>Some content</div>
            <TourTip target="target" direction="right" align="center">TourTip</TourTip>
        </div>
    )
}