/* Wrap */
import React from 'react';
import { Flexbox, colors } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div>
            <Flexbox display="inline-flex" wrap="wrap" style={{background:colors.grey3, width:200, height:100, resize:'both', overflow:'auto'}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox>
            <Flexbox display="inline-flex" wrap="noWrap" style={{background:colors.grey3, width:200, height:100, resize:'both', overflow:'auto'}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox>
        </div>
    );
}