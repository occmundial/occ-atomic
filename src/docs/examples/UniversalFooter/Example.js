import React from "react";
import { UniversalFooter } from "@occmundial/occ-atomic";


export default function Example() {
    return (
        <div style={{position:'relative'}}>
            <div id="target" style={{width:100, height:100, background:'#f7f7f7', display:'flex', textAlign:'center', alignItems:'center'}}>Some content</div>
            <UniversalFooter/>
        </div>
    );
}