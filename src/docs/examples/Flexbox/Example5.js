/* Align content */
import React from 'react';
import { Flexbox, colors } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <div>
            <Flexbox display="flex" wrap="wrap" alignContent="start" style={{background:colors.grey3, width:125, height:125, resize:'both', overflow:'auto'}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" wrap="wrap" alignContent="end" style={{background:colors.grey3, width:125, height:125, resize:'both', overflow:'auto'}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" wrap="wrap" alignContent="center" style={{background:colors.grey3, width:125, height:125, resize:'both', overflow:'auto'}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" wrap="wrap" alignContent="between" style={{background:colors.grey3, width:125, height:125, resize:'both', overflow:'auto'}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" wrap="wrap" alignContent="around" style={{background:colors.grey3, width:125, height:125, resize:'both', overflow:'auto'}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox>
        </div>
    );
}